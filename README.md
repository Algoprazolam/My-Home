# We want Vue and Sass to co-exist and then deploy to github pages

we need
npm
~~parcel~~
Vue3
~~Sass~~
deploy to pages

## step 1. Vue Project and npm install

make brand new empty folder and open it as workspace in vsc

Make a Vue Project

npm create vue@latest and for now just press NO on everything. I'm calling my project vueapp (source)

 cd vueapp
  npm install
  npm run dev

CTRL - C to get out of it.

npm run build

## step 2. Parcel

npm install -D parcel

npx parcel ./index.html

note that i had to remove the DIST folder first and the favicon link from the html

## step 3. Turning the index.html into something i like and adding some SASS files.

i've already coded some stuff so im going to move stuff over.


