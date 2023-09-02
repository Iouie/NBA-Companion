const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

// npx prisma studio to update data
async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Current NBA Players" },
        { name: "NBA Top 75" },
        { name: "Retired NBA Players" },
      ],
    });
  } catch (err) {
    console.error("Error seeding default categories", err);
  } finally {
    await db.$disconnect();
  }
}

main();
