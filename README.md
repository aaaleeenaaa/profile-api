# Customer Profile API

Hey there,

this is my solution for an API serving profile data and enabling to edit and delete it.

I used React / Next.js, as this is the framework I am used to working with.

At the beginning, I initiated a new project using a template so that there already was the required folder structure available.

Then I created the data.js file containing an initial array of profile data and the necessary functions for retrieving them either all or by id, for updating and for deleting them.

Afterwards, I started creating the API structure:
In api/profiles.js, all profiles are retrieved via a GET request to the API. This is used on the index page so that there, a list of all users is shown.
Via api/profile/[id].js, each profile can be accessed individually with its id. This is used on the individual profiles' pages (/profiles/[id].js) to show the profile data and for editing (/profiles/edit/[id].js) and deleting (profiles/delete/[id].js) them.

For deleting a profile, a password has to be entered (in this case "ProfileDeletion" without the quotation marks). This is to make sure that the profiles can not be deleted by everyone.

Unfortunately, at the moment, all profiles are shown to everybody and can be edited by everyone. This would have to be adjusted so that each user can only see and edit their own profile which could for instance be realized by involving a login. Moreover, it might make sense to work on the profile deletion so that it does not depend on a password anymore but that it can only be done by certain staff members when they are logged in. Moreover, a bug appeared: When deleting an account and afterwards editing another one, the deleted one appears again. When doing the same process again, however, it works fine.
These issues were not possible to fix due to a lack of time but could be improved at a later stage.

## Local development

To run the project locally, you need to install the dependencies using `npm i` first.

Then you can start the development server with `npm run dev` - doing this, you can see the project working on localhost.

Other commands you could use are:

- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available - in this case not)
