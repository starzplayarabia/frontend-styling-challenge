# STARZPLAY UI developer challenge

So you made it up to this step. Welcome to the STARZPLAY coding challenge. Good Luck!

## STARZPLAY Landing page

This project is about the new landing page STARZPLAY wants to show to their customers. It's actually the real design
with the same technologies used in the real word landing page. The idea with this is that you get a realistic picture
of the designs and development tools you will use if you finally join us. Maybe you have never used some of the tool
we are using in this project, so just take into account that you will have to read some docs before telling us how much
time you will need to complete the challenge.

Unfortunately, our developers couldn't complete it and that's why we need your help here.

## Your tasks

- Implement the landing page header: In the existing implementation the header is not styled. Please implement the
styles as they appear in the designs. As shown in there, the burger menu and the logo must appear on the left and the
Explore and Login links together with the language selection dropdown at the right. Remember we don't want you to
implement any logic, just style the header please. However, we do want the burger menu contents to be displayed
correctly when clicking on it.

- Implement the We Are #1 element: in the design, inside the blue area below the main image, you can find a visual
element that has been implemented just as text. Please find the best way you can think of to implement this part as
shown in the design.

- Style the footer: Add the needed styles to the footer to make it appear as in the designs.

- Complete sticky banner implementation: The sticky banner is the one that contains the Email, Mobile and Facebook
buttons. We call it sticky because we want it to have a sticky behavior. This means that we want the banner to be
always present and visible at the bottom of the screen, no matter we are on the top of the landing page, in the middle
or we have scrolled down completely.

- Make the burger menu appear only on mobile devices: Make the burger menu only appear on the page for small screens.
It's up to you what you consider a small screen, but please document your decision with your reasons.

- Implement mobile first principles in some components: Ensure that the following components follow mobile first
principles: The images of the components that have the texts "Imagine the best entertainment all in one place", "Turn
your Smart TV into Brilliant TV" and "Get thousands of titles in your pocket"

- Try to match the designs: There are some small adjustments that are needed on some parts of the implementation to
totally match the designs, please try to make them closest as possible to the requirements.

## The designs

We are attaching 2 images of the landing page in this project, under the designs folder. One shows the desktop version
while the other one shows the mobile version. The differences between both should be satisfied only with responsive
design implementations. Please don't worry if some images defer from the design to the implementation.

## Time

We understand that you are currently working and you have your life. We don't want to be a problem for that so once
you have read this README and you think you have all the tasks clear, please let us know how long it will take for you
to complete them and send the challenge back to us. Just tell us one date and we will wait until then.

## Development

### Setting up the development environment

This project requires Node.js to be installed, any not-too-old version should work. Once you satisfy this requirement,
you can run the app by running:

```
npm install
npm start
```

If you want to build the app for production, you can do:

```
npm run build
```

### Some tips around the implementation

- There are some components available that could be helpful for you to complete the challenge. You can find a storybook
documentation for a list of components in .out/index.html. If you open it in a browser, you will be able to know about
them. Please keep in mind that if the component is not present in this project, you won't need it, so you can just
ignore it even if it appears in the docs.
- There is a set of breakpoints already defined in src/styles/starz-landing/styles/breakpoints.js
- There is a set of z-index levels already defined in src/styles/starz-landing/styles/global.js
    
### Process

- The final deliverable should be one of these:
    - A zip file with your results.
    - (Preferred but won't negatively evaluate if not done this way) A link to a git repo with one or more pull requests
    in the repository.
- If you have any questions, let us know, we'd be happy to help you as you need.

### Tools used in the challenge

- [Create React App](https://create-react-app.dev/): An app bootstrapper that makes it much easier to start creating React apps.
- [Styled Components](https://www.styled-components.com/): Library used to style our React components.
- [Storybook](https://storybook.js.org/): You shouldn't need to know anything about it, but present here for reference.

## What to pay attention to besides the tasks

- You have received an existing project. Try to follow the file organization and code style that is present on it. The
same applies to the way on which we style components. You can check how the already styled components are done to follow
the same conventions.

# What not to pay too much attention to

- You are provided with a design that is just a plain image from which you can't extract the exact sizes for the
elements. We are not expecting a pixel perfect implementation, just something that is close enough to how the design
looks.
- In the design you will find some components that are not present in the implementation. You don't need to implement
them in this challenge. We have removed them on purpose to simplify the project so that you can focus on what we want to
see from you. Examples of things that are present in the designs but not in the project are: "Only on STARZPLAY"
carousel, genre based carousel.
- For us multi-language support is super important, and given that we operate in several arabic speaking countries
implementing right-to-left designs is key. However, for this challenge we are not requesting any implementation for the
arabic version of the landing page.
- In the project you will find several links without a valid href. These, in the real word landing page, are meant to
link to external websites. Just leave those links as you find them (and ignore the linter warnings), we won't need any
functional link in this challenge.
- We know browser support is something to be taken into account. For this challenge, feel free to use any new technology
you find appropriate, but please let us know if you use anything that requires certain version of a given browser.
