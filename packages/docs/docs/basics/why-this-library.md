---
sidebar_position: 1
description: Discover the reasons behind choosing this library
---

# Why this library?

Our team wanted to make a UI package with shared components for our react-native apps. We didn't want to write everything using `Stylesheet.Create`, so we looked for alternatives. We liked [native-base](https://nativebase.io) because it's simple and decided to go with its successor, [gluestack](https://gluestack.io/).

After creating styles for the basic components, we built a page to showcase all the UI Kit variants.
To our surprise, even with just a few variants of buttons, typography, and colors, the render-time was impressive compared to what we were used to with `Stylesheet.Create`.

At first, we thought we might have done something wrong, so we checked the configurations and even measured production times, which were better but still **much higher** compared to react-native vanilla.

We repeated these tests with other style libraries, and the results were consistent. Most of the style libraries improved the dev experience but **negatively impacted the application's performance**.

The mapping of properties, development ease, and cross-platform improvements come at a high cost in terms of complexity and, in many cases, runtime.

This library is born as an alternative to add **variants** to your components, **minimize runtime**, and maintain code simplicity.

:::note Note
This doesn't mean we don't recommend other libraries. In most cases, building an app using gluestack, nativebase or styled-components is **completely possible**.
Each library addresses different challenges. Some enhance the development experience by exposing `JSX` properties, while others improve React Native's cross-platform capabilities
:::
