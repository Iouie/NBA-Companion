const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Current NBA Players" },
        { name: "NBA Top 75" },
        { name: "Retired NBA Players" },
        { name: "Deceased NBA Players" },
      ],
    });
  } catch (err) {
    console.error("Error seeding default categories", err);
  } finally {
    await db.$disconnect();
  }
}

main();
