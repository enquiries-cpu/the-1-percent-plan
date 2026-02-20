
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fngutnxgdsfvbdudfcui.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZ3V0bnhnZHNmdmJkdWRmY3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MjY2MDUsImV4cCI6MjA4NzAwMjYwNX0.exoyEE2VDsO7Ouk70V_dPOl9Q82xXOWMm7pNcrsBAIU';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkTables() {
    console.log('--- Supabase Table Inventory ---');

    // Attempting to list all tables by querying the schema cache
    // Note: PostgREST doesn't have a direct 'show tables' but we can catch errors
    // to see what's missing, or try a direct SQL if we had the service role key.
    // Since we only have anon key, we'll try common tables.

    const tables = ['profiles', 'messages', 'news', 'programs', 'user_subscriptions'];

    console.log('NOTE: If you see PGRST205, it means the table has NOT been created in your Supabase project yet.');
    for (const table of tables) {
        const { error } = await supabase.from(table).select('*').limit(1);
        if (error) {
            console.log(`Table [${table}]: ${error.message} (${error.code})`);
        } else {
            console.log(`Table [${table}]: EXISTS ✅`);
        }
    }
}

async function checkUserExistence(email) {
    console.log(`\n--- Checking User: ${email} ---`);
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email);

    if (error) {
        console.log('Error searching for user:', error.message);
    } else if (data && data.length > 0) {
        console.log('User found in profiles!');
        console.log(data);
    } else {
        console.log('User not found in profiles.');
    }
}

async function run() {
    await checkTables();
    await checkUserExistence('damonpf@hotmail.co.uk');
    await checkUserExistence('enquiries@crossfitrayleigh.com');
}

run();
