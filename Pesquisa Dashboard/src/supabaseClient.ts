import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ofwppcrvnuwexickcqap.supabase.co"
const supabaseKey = "sb_publishable_r2Nr6Fzju0G-7J1Qgt8cdw_dwD7hQjS"

export const supabase = createClient(supabaseUrl, supabaseKey)
