
# react-adaptive-navbar


A reusable Navbar component in react for either Web Browser or 
Mobile screen responsivenes.


Live demo
# Live demo

Link: https://quivercrypto.netlify.app/home



## Installation

Install my-project with npm

```bash
  npm i react-adaptive-navbar
```
    
```bash
import { NavBar } from 'react-adaptive-navbar';
const LINKS = [{
        display: "Empty",
        url: "/1",
    },
    {
        display: "List",
        url: "/2",
    },
    {
        display: "Failed",
        url: "/3",
    }]
export const Example = () => 
        <NavBar 
            bg='#0b4a91' 
            font=''Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif' 
            nav = LINKS
        />
```
## Props

| Props | Types  | Description |
| ------------- | ------------- | -------------| 
| bg  | Str  | Background colour for navbar with '#xxxxx' |
| font  | Str  | String of React native Fonts |
| nav  | Object Array  | Requires display and url fields |

## Feedback

If you have any feedback, please reach out to us at nikhilsurfingaus@gmail.com

