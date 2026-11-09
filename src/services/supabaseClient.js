import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://yxwhufclmkpviroodekm.supabase.co'; 

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_-Jz_5A2v40jEDsAgoPEtaQ_x1r5HBFz'; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);