# Contributing to this project

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

If you discovered bugs and issues, have ideas for improvements or new features, please report to the issue tracker and send a pull request, but respect the following guidelines.

## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests.
- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. Check that the issue **has not** already been reported.
   -. **Use the GitLab issue search**.
1. **Check that the issue has not already been fixed** in the latest code.
   - Try to reproduce it using the latest `develop` branch in the repository.
1. **Isolate the problem** -- create a [reduced test case](http://css-tricks.com/reduced-test-cases/) and a live example.
1. Open an issue with a clear title and description in grammatically correct, complete sentences.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What [browser(s)](https://aboutmybrowser.com/) and OS experience the problem? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

You may also read [How To Ask Questions The Smart Way](http://www.catb.org/esr/faqs/smart-questions.html), by Eric S. Raymond and Rick Moen.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to *you* to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code, porting to a different language), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation, accurate comments, etc.) and any other requirements (such as test coverage).

Follow this process if you'd like your work considered for inclusion in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes

2. If you cloned a while ago, get the latest changes from upstream:

    ```bash
    git checkout <dev-branch>
    git pull upstream <dev-branch>
    ```

3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

    ```bash
    git checkout -b <topic-branch-name>
    ```

4. Commit your changes in logical chunks. Please adhere to these [git commit message guidelines][] or your code is unlikely be merged into the main project. Use Git's [interactive rebase][] feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

    ```bash
    git pull [--rebase] upstream <dev-branch>
    ```

6. Push your topic branch up to your fork:

    ```bash
    git push origin <topic-branch-name>
    ```

7. Open a [pull request][] with a clear title and description.

[pull request]: https://help.github.com/articles/using-pull-requests
[interactive rebase]: https://help.github.com/articles/interactive-rebase
[git commit message guidelines]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
