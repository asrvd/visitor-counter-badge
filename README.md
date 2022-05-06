## Visitor Counter Badge 
Visitor counter badge is a simple API which serves badge from [shields.io](https://shields.io/). You can use this badge to count visitors for your GitHub Repositories or even your personal sites. The usage is very simple.

## Usage
You need a key and a value to create a unique key-value pair which will eventually be used to count visitors. SO considering you want to use the badge for your repository, `user/repo-name` can be a good unique key-value pair.

Default Badge
![](https://visitor-counter-badge.vercel.app/api/asheeeshh/visitor-counter-badge/)
```markdown
![](https://visitor-counter-badge.vercel.app/api/asheeeshh/visitor-counter-badge/)
```
Badge with custom label and color
![](https://visitor-counter-badge.vercel.app/api/asheeeshh/visitor-counter-badge?label=Hits&color=fc7695&labelColor=95abdb)
```markdown
![](https://visitor-counter-badge.vercel.app/api/asheeeshh/visitor-counter-badge?label=Hitss&color=fc7695&labelColor=95abdb)
```

## Custom Styling
You can customize the badge by passing the following parameters:

| Parameter        | Description                   | Default       | 
| ---------------- | ----------------------------- | ------------- | 
| style            | style of badge                | for-the-badge |
| label            | label name                    | Visitors      | 
| color            | color for right side of badge | 5c5866        |
| labelColor       | color for left side of badge  | 2b2930        |

For avaialble styles and color types, please refer to [shields.io](https://shields.io/) site.

## A note on using
The API depends upon [countapi](https://countapi.xyz/) for counting visitors. Though it's kind of impossible, still if you get ratelimited by the API you can just host your own instance of this API using [Vercel](https://vercel.app/) and get unlimited personal requests!\
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fasheeeshh%2Fvisitor-counter-badge)

## License
MIT

## Ending Note
- If you find this project helpful, consider giving it a ⭐.
- Checkout my other projects too 💜.

