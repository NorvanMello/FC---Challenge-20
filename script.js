
//Previous code before having 2 img btn

// const popOver = document.querySelector(".popover")
// const share = document.querySelector(".share")

// share.addEventListener("click", (e) => {
//     e.stopPropagation();
//     popOver.classList.toggle("active")
// })

// document.addEventListener("click", (e) => {
//     const isClickInside = popOver.contains(e.target || share.contains(e.target));

//     if(!isClickInside) {
//         popOver.classList.remove("active")
//     }
// })

const popOver = document.querySelector(".popover");
const shareButtons = document.querySelectorAll(".share");

shareButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        popOver.classList.toggle("active");
    });
});

document.addEventListener("click", (event) => {
    const isClickInside = popOver.contains(event.target) || [...shareButtons].some(button => button.contains(event.target));

    if (!isClickInside) {
        popOver.classList.remove("active");
    }
});


/*
🧠 1. What changed in your code?

Before, you had:

const share = document.querySelector(".share");

👉 This selects ONE element

Now you have:

const shareButtons = document.querySelectorAll(".share");

👉 This selects ALL elements with class .share

⚠️ Important

querySelectorAll returns:

👉 a NodeList (like an array)

Example:

shareButtons = [button1, button2]
🧠 2. .forEach() → looping through elements
shareButtons.forEach(button => {
    button.addEventListener("click", ...)
});

👉 This means:

“For EACH share button, add a click event”

📌 Translation
button1.addEventListener(...)
button2.addEventListener(...)
🎯 Why this is important

Because now:

desktop button works ✅
mobile button works ✅

Same logic, multiple elements

🧠 3. The spread operator [...]

This part:

[...shareButtons]
👉 What is this?

This is called the spread operator

It converts:

NodeList → Array
Why?

Because .some() works on arrays.

So:

[...shareButtons]

means:

“Turn this NodeList into a real array so I can use array methods”

🧠 4. .some() → VERY powerful method
.some(button => button.contains(event.target))
👉 What .some() does:

“Does AT LEAST ONE item match this condition?”

📌 Example
[1, 2, 3].some(n => n > 2)

👉 result:

true

Because 3 > 2

In YOUR code:
[...shareButtons].some(button => button.contains(event.target))

👉 means:

“Did I click inside ANY share button?”

🧠 5. Full logic breakdown
const isClickInside =
  popOver.contains(event.target) ||
  [...shareButtons].some(button => button.contains(event.target));
👉 Human translation:

“Did I click inside the popover
OR inside any share button?”

🎯 Cases
✅ Click inside popover
popOver.contains(...) → true
✅ Click on ANY share button
some(...) → true
❌ Click outside everything
false || false → false

👉 then:

popOver.classList.remove("active");
🧠 6. Why .some() is better than before

Before, you had:

!share.contains(event.target)

👉 only worked for ONE button

Now:

.some(...)

👉 works for MANY buttons

👉 scalable

🔥 7. Mental model (this is gold)

Think like this:

.some()

=

“Check the list — if ANY item matches, return true”

🧪 Small exercise (for you)

Imagine:

const buttons = ["btn1", "btn2", "btn3"];
buttons.some(btn => btn === "btn2")

👉 Result?

👉 true

🧙‍♂️ What you just learned (important)

You just used:

NodeList
forEach loop
spread operator ...
array method .some()
DOM logic + event targeting

👉 This is real front-end developer skill




*/
