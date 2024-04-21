# The SRE Challenge: Create a License Auditing Tool

To get you started we have the basic structure for a license checker nodejs app already completed for you to build upon.

Use `yarn check-licenses` to run the project. You should see a "hello world" message.

## About this repository

This repository was bootstrapped using [Nx](https://nx.dev/l/r/getting-started/intro) (a typescript monorepo framework). It's not critical that you are familiar with Nx, but it wouldn't hurt to spend a few minutes reading the [getting started intro](https://nx.dev/getting-started/intro) to familiarize yourself with the toolset.

## The challenge

Your challenge is to complete the file `apps/tools/license-checker/src/main.ts` so that it audits dependencies in this monorepo. To achieve this, you will need to determine the type of license for every dependency in the `node_modules` folder and determine whether or not the license is whitelisted or not.

A set of recommended libraries ([license-checker](https://github.com/davglass/license-checker), [spdx-correct](https://github.com/jslicense/spdx-correct.js), and [spdx-satisfies](https://github.com/jslicense/spdx-satisfies.js)) has been provided in the monorepo and imported in the file, but these are not required.

The output should be a list of packages with licenses that were found that are not allowed based on our whitelist. This can be console output, or if you're feeling ambitious you can output to a text file or even a PDF (using a library like [react-pdf](https://react-pdf.org/)).

```bash
# example console output might look something like this

package 'argparse@2.0.1' has invalid license 'Python-2.0'
package 'axe-core@4.3.5' has invalid license 'MPL-2.0'
package 'caniuse-lite@1.0.30001285' has invalid license 'CC-BY-4.0'
package 'caniuse-lite@1.0.30001312' has invalid license 'CC-BY-4.0'
package 'language-subtag-registry@0.3.21' has invalid license 'ODC-By-1.0'
package 'lz-string@1.4.4' has invalid license 'WTFPL'
package 'spdx-exceptions@2.3.0' has invalid license 'CC-BY-3.0'
package 'tslib@1.14.1' has invalid license '0BSD'
package 'tslib@2.1.0' has invalid license '0BSD'
package 'tslib@2.3.1' has invalid license '0BSD'
```

### Some tasks to get you started

- [ ] Query for a list of licenses using the `license-checker` library
- [ ] Correct/normalize each license using the `spdx-correct` library
- [ ] Validate each license using the `spdx-satisfies` library
- [ ] Output the list of non-compliant licenses to the console
- [ ] Build a PDF report of the non-compliant licenses

### When you finish

- Ensure all changes are commited
- Push your branch up to github
- Open a pull request
- Let us know you've finished

---

## Setting up your environment

This app requires NodeJS `16.13.10` (not the latest version). If you don't already have node installed, or need to pin to a specific version, we recommend using [nvm](https://github.com/nvm-sh/nvm).

### NVM Install on Windows (using powershell)

```powershell
# Install the scoop package manager
iwr -useb get.scoop.sh | iex
scoop install git 7zip # Scoop requires git and 7zip to update itself and extract packages

# Install and use NVM
scoop install nodejs nvm
nvm install 16.13.0
nvm use 16.13.0
```

### NVM Install on MacOS

```
brew install nvm
nvm install 16.13.0
nvm use 16.13.0
```

It can also be helpful to have the [Nx cli tools](https://nx.dev/l/r/getting-started/nx-setup) installed globally via `npm install -g nx`

- Clone this repo
- Create a branch for your changes
- Run `yarn` to initialize the project
- Run `yarn nx test` to ensure the existing test suite passes
- Run `yarn check-licenses` to see the output of your project!
