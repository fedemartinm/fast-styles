# Fast Styles Benchmark

This project is a benchmark comparing different style libraries currently available. 

### The results are shown in the following table

 | Library         | Mount (ms) | Render (ms) |
|------------------|------------|-------------|
| Fast Styles      |     145      |     76       |
| StyleSheet       |     150      |     84       |
| Styled Components|     171     |     102       |
| Tamagui          |     410      |    284       |
| Gluestack        |     927      |     832      |

### Note 1: In cases where possible, the corresponding Babel plugin was configured to optimize performance, but it didn't show significant improvements for mobile. If you think this is an issue or would like to add another library to the benchmark, please don't hesitate to open a ticket.
### Note 2: In addition to render and mount times, the benchmark also reveals the considerable amount of time added during compile time using some libraries.


## Process 
The process involves rendering various nested components using different variants. 
Each component's implementation follows the guidelines suggested by each library.

<img width="249" src="https://github.com/fedemartinm/fast-styles/assets/33937355/da4c4aa8-9964-4bee-a6c5-33e5b71833dc">

## Last update: 4th August 2023

- React Native: 0.71.8
- Fast Styles: 2.1.0
- Styled Components: 6.0.4
- Tamagui: 1.43.15
- Gluestack: 0.1.33
