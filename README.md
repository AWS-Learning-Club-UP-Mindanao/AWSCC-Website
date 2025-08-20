# 🌩️ AWS Cloud Club - UP Mindanao Official Website

Welcome to the official website repository of **AWS Cloud Club - UP Mindanao**!  
This site aims to showcase our club, its initiatives, events, blogs, and learning resources.

## 🧭 Project Overview

- 🔗 [Live Site (Main)](https://awsccupmindanao.org)  
- 🔗 [Workshop Materials (Subdomain)](https://workshops.awsccupmindanao.org)
- 🔗 [Blogs (Subdomain)](https://blogs.awsccupmindanao.org)

The site is composed of two parts:
- **Main Website**: A static HTML/CSS/JS site
- **Workshops Section**: A separate [Jekyll](https://jekyllrb.com/) site hosted on a subdomain
- **Blogs Section**: A separate [Jekyll](https://jekyllrb.com/) site hosted on a subdomain

---

## 🗂️ Directory Structure

```
awscc-website/
│
├── index.html # Landing Page
├── pages/
│ ├──  about.html # About Us Page
│ ├──  officers.html # Officers Page
│ ├──  blogs.html # Blog/Writeups Page
│ ├──  events.html # Events Page
├── assets/
│ ├── css/
│ │ └── styles.css # Main stylesheet
│ ├── js/
│ │ └── main.js # JS interactivity
│ └── images/ # Logos, illustrations, photos, favicon
└── README.md
```

## 🔀 GitHub WorkFlow

This project follows a **Trunk-Based** Development workflow to ensure fast iteration, smooth collaboration, and maintainable code quality. All changes go through a strict review process before being merged into the main codebase.

---

## Start w/ Tickets

All tasks should begin from a connected ticket on our project board.

```
git checkout -b <type/short-description> main
```

1. Go to the **Project Board**
1. Locate your assigned ticket
1. Scroll to the right sidebar under **Development**
1. Connect your branch to the ticket

---

## Branch Naming Convention

Branches should follow the **Conventional Commits** style using the commit `type` as a prefix:

### Format:

```
<type>/short-description
```

### Examples:

- `feat/add-user-authentication`
- `fix/fix-login-bug`
- `chore/update-dependencies`
- `docs/update-readme`
- `test/improve-coverage`

### Allowed Types:

- `feat` → New feature
- `fix` → Bug fix
- `chore` → Maintenance tasks
- `docs` → Documentation updates
- `test` → Test-related changes
- `refactor` → Code improvements (no functional changes)
- `style` → Code styling (formatting, linting, etc.)
- `perf` → Performance improvements
- `build` → Changes that affect the build system

---

## Push Your Changes

_Please refer to [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for the format of your commit messages_

Proceed with:

```
git add .
git commit -m “feat: your message here”
git push origin <current branch name>
```

1. Open a Pull Request (PR) to the `main` branch
1. Move the corresponding ticket to the **For Review** column
1. Add a **Reviewer** to your PR to check your changes

---

## Pulling Changes to Your Branch

When others have merged into `main`, pull the latest changes to stay up-to-date:

```
git pull origin main
```
## Branch Behind? Rebase It!

If your local branch is behind `main`, **rebase before pushing** to avoid merge conflicts later.

```
git fetch origin main
git rebase origin/main
```

> If rebase fails or conflicts, stash your changes:

```
git stash
git fetch origin main
git rebase origin/main
git stash pop
```

Don’t forget to resolve any merge conflicts during this step.

---

## Still on Main?

Always branch off from `main`. Do not push changes directly.

```
git checkout -b <type/short-description> main
```

> Already made changes in `main`? **Do this:**

```
git stash
git checkout -b CR-<ticket-number> main
git stash pop
```

---

## Commit Message Guidelines

We follow **Conventional Commits** for all messages.

### Format:

```
<type>(<scope>): <message>

[optional body]

[optional footer]
```

### Examples:

- `feat(auth): add user authentication`
- `fix(login): resolve incorrect password issue`
- `chore(deps): update dependencies`
- `docs(readme): update usage instructions`

**Scope** is optional, but recommended for clarity.

---

## Merge to Main (Leads Only)

Only leads are allowed to merge into `main`.

1. Do **not** click the default “Merge” button.
1. Use the dropdown beside the merge button.
1. Select **Squash and merge** to keep history clean.
1. After merge **delete the branch to keep the repo clean.**
1. Move the ticket to **Done** after merge.

---

## One Ticket, One Branch

Stick to a **1 ticket = 1 branch** rule to make tracking and reviews easier. Never reuse branches across tickets.

> **If you're unsure about any step, ask your lead! We're all learning—no shame in asking.**

---

## Vercel Configuration

This project uses Vercel configuration (vercel.json) to manage clean URLs and page redirects.


### Clean URLs

```json
"cleanUrls": true
```
Removes the `.html` extension from browser URLs

### Redirects

```json
"redirects": [
  {
    "source": "/about",
    "destination": "/pages/about.html",
    "permanent": true
  }
]
```

Maps a simplified path to the actual HTML file.

Example:
- /about will serve /pages/about.html
- /events will serve /pages/events.html
- /officers will serve /pages/officers.html

The `"permanent": true` flag makes the redirect a 301 (permanent redirect), which is good for SEO.
