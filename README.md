Welcome to my Next.js project, designed to showcase the integration of TypeScript and Tailwind CSS for styling purposes. This project serves as a learning platform for mastering Next.js development practices.

In this project i am using mongodb as databse and the address of the database is being stored in the .env file, but .env file in not
available in the repository on Github.

Technologies Used
Next.js: A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.
TypeScript: A typed superset of JavaScript that adds optional types to the language, enhancing code quality and understandability.
Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
Prisma: An open-source database toolkit that simplifies database workflows in application development. It is utilized in this project to manage database operations efficiently within the Next.js environment.
By incorporating these technologies, I aspire to create a robust, scalable, and aesthetically pleasing web application that demonstrates my growing expertise in full-stack development.

---

All commads that has been used in this project:

To create a new Next.js project:
(
npx create-next-app@latest
npm run dev
)

to install Prisma database:
(
npm install prisma --save-dev
npx prisma init --datasource-provider sqlite
)

To create a new database table or when the data(model) that is being stored in the database changes:
{
npx prisma db push
}

To open database tables:
(
npx prisma studio
)

To seed the database :
(
npm install tsx -D
npm i tsx -D

    And add the following to the package.json file:

     "prisma": {
        "seed": "tsx prisma/seed.ts"
    }

)

To seed the database:
(
npm run seed
)

To migrate the database:
(
npx prisma migrate dev
)
