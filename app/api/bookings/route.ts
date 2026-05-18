import { NextResponse } from 'next/server';
import { getSupabaseAdmin, BookingRow } from '@/lib/supabase';

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function GET(req: Request) {
  const supabase = getSupabaseAdmin();
  const { searchParams } = new URL(req.url);
  const iso = searchParams.get('iso');

  if (iso) {
    const { data, error } = await supabase
      .from('bookings')
      .select('iso, slot')
      .eq('iso', iso);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ iso, slots: (data ?? []).map((r) => r.slot) });
  }

  const { data, error } = await supabase
    .from('bookings')
    .select('iso, slot');
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const taken: Record<string, string[]> = {};
  for (const row of data ?? []) {
    (taken[row.iso] ||= []).push(row.slot);
  }
  return NextResponse.json({ taken });
}

export async function POST(req: Request) {
  let body: Partial<BookingRow>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { iso, slot, name, email, idea } = body;
  if (!iso || !slot || !name || !email || !idea) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    return NextResponse.json({ error: 'Invalid date format.' }, { status: 400 });
  }
  if (!/^\d{2}:\d{2}$/.test(slot)) {
    return NextResponse.json({ error: 'Invalid slot format.' }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Invalid email.' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from('bookings')
    .insert({
      iso,
      slot,
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      idea: String(idea).slice(0, 1000),
    })
    .select('id')
    .single();

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'That slot was just taken. Please pick another.' },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data?.id });
}
