// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mywyagtgynrktqvospop.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15d3lhZ3RneW5ya3Rxdm9zcG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY2NDM3NzAsImV4cCI6MjAzMjIxOTc3MH0.o05FKS0gRKOELXiP21yKy4lu2jjRKlPk859M-8m96zY';

export const supabase = createClient(supabaseUrl, supabaseKey);
