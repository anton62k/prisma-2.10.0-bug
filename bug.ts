import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const DATE_1 = "2021-01-01T00:00:00.000Z";
const DATE_2 = "2021-01-02T00:00:00.000Z";

async function seed() {
  const count = await prisma.user.count();
  if (!count) {
    await prisma.user.create({ data: { date: DATE_1 } });
    await prisma.user.create({ data: { date: DATE_2 } });
  }
}

async function sequence() {
  console.log(
    await prisma.user.findUnique({
      where: { date: DATE_1 },
    })
  );
  console.log(
    await prisma.user.findUnique({
      where: { date: DATE_2 },
    })
  );
}

async function bug() {
  const res1 = prisma.user
    .findUnique({ where: { date: DATE_1 } })
    .then(console.log);
  const res2 = prisma.user
    .findUnique({ where: { date: DATE_2 } })
    .then(console.log);

  return Promise.all([res1, res2]);
}

async function main() {
  await seed();
  await sequence();
  await bug();
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
