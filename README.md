# NextJS frontend with Laravel Backend and Laravel Sanctum for authentication

I really enjoy Laravel for backend work. It makes my life easy with things like Queues, Mailables, Laravel Nova, etc. But I personally prefer using React on the frontend than Blade templates (or even with the newer tools like Livewire, Alpine, etc)

- Does it complicate things? In some ways, yes
- Does it mean you have to deploy the frontend and backend independently? Yes.
- Is it worth it? I would always go this route

## Setup

This assumes that the frontend is hosted at http://localhost:3000 and the backend is http://localhost:8000 (use php artisan serve)

Make sure you set the following in your Laravel .env

`SESSION_DOMAIN=localhost`

Otherwise setup Next and Laravel as normal. Run `yarn dev` and `php artisan serve` to start. You will want to run the database migrations and seed a couple of users (I just use php artisan tinker to do this)

## TODO:

- [ ] Create env variables for frontend and background URLs
- [ ] Add ESLint and ECS
- [ ] Decide on whether NextJS api functions are useful to use
- [ ] Decide how to handle flicker when loading user data on index page. I do not want to use getServerSideProps as it will create a Lambda function. Perhaps store in localStorage, still run the query in the background to update localStorage or invalidate users session. #frontendnoob
- [ ] Add a simple auth guard that will restrict page access to logged in users