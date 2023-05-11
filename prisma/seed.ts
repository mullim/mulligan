import prisma from "../lib/prisma";

async function main() {
  const response = await Promise.all([
    await prisma.users.upsert({
      where: {},
      update: {},
      create: {
        title: "Blog Post 1",
        author: "Mike",
        slug: "blog-post-1",
        content: "blah",
      },
    }),
    /* prisma.users.upsert({
      where: { email: 'lee@vercel.com' },
      update: {},
      create: {
        name: 'Lee Robinson',
        email: 'lee@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg',
      },
    }),
    await prisma.users.upsert({
      where: { email: 'stey@vercel.com' },
      update: {},
      create: {
        name: 'Steven Tey',
        email: 'stey@vercel.com',
        image:
          'https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg',
      },
    }), */
  ]);
  console.log(response);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
