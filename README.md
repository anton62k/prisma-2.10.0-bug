- create ".env" as a copy of ".env.example" and put your creds
- npm install
- npx prisma migrate dev --name init --preview-feature
- npx prisma generate
- ts-node bug.ts
