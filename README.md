# Alveno - Frontend úkol

Soubor `types/supabase.ts` obsahuje typy entit vygenerované z backendu.

### Dokumentace API

Read all rows

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```

With pagination

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Range: 0-9"
```

With filtering. Eg. `id=eq.<teamId>`

```Bash
curl 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?id=eq.1&select=*' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Range: 0-9"
```

Insert row - `id` a `createdAt` se automaticky vygenerují a **není** potřeba je posílat.

```Bash
curl -X POST 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "some_column": "someValue", "other_column": "otherValue" }'
```

Update matching rows

```Bash
curl -X PATCH 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?some_column=eq.someValue' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY" \
-H "Content-Type: application/json" \
-H "Prefer: return=minimal" \
-d '{ "other_column": "otherValue" }'
```

Delete matching rows

```Bash
curl -X DELETE 'https://nktebdhspzvpwguqcksn.supabase.co/rest/v1/teams?some_column=eq.someValue' \
-H "apikey: SUPABASE_KEY" \
-H "Authorization: Bearer SUPABASE_KEY"
```
