
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fngutnxgdsfvbdudfcui.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZ3V0bnhnZHNmdmJkdWRmY3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MjY2MDUsImV4cCI6MjA4NzAwMjYwNX0.exoyEE2VDsO7Ouk70V_dPOl9Q82xXOWMm7pNcrsBAIU';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
    console.log('--- Supabase State Check ---');

    const { data: profiles, error, count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact' });

    if (error) {
        console.log('Error checking profiles:', error.message);
    } else {
        console.log(`Total profiles in database: ${count}`);
        if (count > 0) {
            console.log('Sample profiles:', profiles.slice(0, 3).map(p => ({ email: p.email, role: p.role })));
        } else {
            console.log('The profiles table is completely EMPTY.');
        }
    }
}

run();
