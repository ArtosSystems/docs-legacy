Getting Started with Slate
------------------------------

### Prerequisites

You're going to need:

 - **Linux or macOS** — Windows may work, but is unsupported.
 - **Ruby, version 2.3.1 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Getting Set Up

1. Fork this repository on GitHub.
2. Clone *your forked repository* (not our original one) to your hard drive with `git clone https://github.com/YOURUSERNAME/slate.git`
3. `cd slate`
4. Initialize and start Slate. You can either do this locally, or with Vagrant:

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

You can now see the docs at http://localhost:4567. Whoa! That was fast!

Now that Slate is all set up on your machine, you'll probably want to learn more about [editing Slate markdown](https://github.com/lord/slate/wiki/Markdown-Syntax), or [how to publish your docs](https://github.com/lord/slate/wiki/Deploying-Slate).

If you'd prefer to use Docker, instructions are available [in the wiki](https://github.com/lord/slate/wiki/Docker).

### Note on JavaScript Runtime

For those who don't have JavaScript runtime or are experiencing JavaScript runtime issues with ExecJS, it is recommended to add the [rubyracer gem](https://github.com/cowboyd/therubyracer) to your gemfile and run `bundle` again.

### Publishing Your Docs to GitHub Pages

Slate spits out a bunch of static HTML, Javascript, and CSS, so it's pretty trivial to host.

Publishing your API documentation couldn't be more simple.

1. Make sure you're working on a fork in your own account, not our original repo: `git remote show origin`
2. Commit your changes to the markdown source: `git commit -a -m "Update index.md"`
3. Push the markdown source changes to GitHub: `git push`
4. Run ``./deploy.sh`

NOTE: Using the git way, you should not make changes to your repo on github.com for example.

Done! Your changes should now be live on http://yourusername.github.io/slate, and the main branch should be updated with your edited markdown. Note that if this is your first time publishing Slate, it can sometimes take ten minutes or so before your content is available online. It can also take a moment even if it's not the first time.

Also, thanks to X1011 for the excellent deploy script.
