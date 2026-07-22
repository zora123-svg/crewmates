# Web Development Project 7 - *Crewmates*

Submitted by: **Barisua Ntor-ue**

This web app: **lets users create, view, update, and delete their own crew of custom crewmates, each with a name, speed, and color, backed by a Supabase database**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [x] **The web app includes a summary page of all the user’s added crewmatese**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [x] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [x] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
  - [x] **Each crewmate has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [x] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [x] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [x] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley


The following **additional** features are implemented:

* [x] Crewmates can be given a category (Pilot, Engineer, or Medic) that restricts which colors they can be assigned
* [x] The gallery summary section shows total crew count, average speed, and a color breakdown with percentages
* [x] A Crew Success Score (0-100, based on average speed and color diversity) is calculated and gives the crewmate grid a colored glow (green/yellow/red) matching its tier

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Animation1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- Several Supabase calls originally ignored the `error` returned alongside `data`, so failed requests (like a mismatched table name) failed silently instead of surfacing a message — fixed by checking `error` after every query.
- The gallery page crashed with a null-reference error when the initial fetch returned `null` (e.g. after a failed query) and the code tried to read `crewmates.length` directly — fixed by defaulting to an empty array.
- Ran into a "table not found" 404 from the Supabase REST API caused by the code querying a table name that didn't match the actual table name in the database.
- The update form appeared to do nothing after adding error handling, but the request was actually succeeding — it just didn't navigate anywhere afterward, so there was no visible confirmation. Fixed by redirecting to the gallery after a successful update, matching the create/delete flows.
- Adding the crewmate `category` feature required a new database column, which had to be added manually via a SQL migration run in the Supabase SQL editor rather than through the app code.

## License

    Copyright [2026] [Barisua Ntor-ue]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
