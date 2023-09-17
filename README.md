# coolgle - the cooler google

Brace yourself for a new and not Google software! Introducing Coolgle, the open source search engine powered with **Bun** and **Express JS**!

## Download

Github Pages sadly doesn't support backend, so you'll have to manually install and run `bun index.ts` on the Typescript file. And thats assuming that you have these packages installed:

- express
- ejs
- body-parser
- crypto-js
- cookie-parser
- bun:sqlite

## Backstory

I came across this video on Youtube about making a better Google. I thought: "Oh, that's easy! I can totally do that!". Initially, I the backend with Go, specifically, with **Go Fiber**  as the full-stack framework.

It was easy, and *that was the reason I didn't like it.* You see, as Terry Davis said: *"An idiot admires simplicity, a genius admires complexity."* So, since I'm an idiot, I decided to hop between many Javascript backend frameworks like a teenager deciding what they want to be in life.

At first, I tried **Elysia**, but I didn't know how to render websites with it. Then I tried **Hono**, and it was basically the same thing. So I decided to just use Express.

## Thoughts

 - I had a lot of ambition for this project. There was supposed to be a news feed at the bottom, some icons for user accounts, and a completely custom search engine. But I ended up just making the login page and the main page. I used Google as the search engine instead, which is ironic if you think about it. But that's just how coding works. You want to make the next Google, Facebook, Twitter, and end up making the bare minimum. This is especially bad for me, because I'm lazier than an sloth, and that leads to me having the instinct to make it easier for myself.
 
- I don't think it's that safe myself, considering it uses crypto-js as it's equation, specifically SHA256, which can be decrypted using a website in the internet. Seriously, just search up "SHA256 decrypt" and you'll find it. I used it myself and it's very accurate, too.

- For the love of God, do not use this as your daily browser.