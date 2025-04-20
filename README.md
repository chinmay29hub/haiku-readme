
<img src="">

# Code Haiku SVG Generator

Generate tech-themed haiku SVGs for your GitHub Profile README. Add a poetic touch to your profile with a single line!

![test](https://chinmay29hub-haiku-readme.vercel.app/api?theme=dark&type=horizontal&border=true)


## Usage

Embed a haiku SVG in your README with:

```markdown
![Code Haiku](https://your-haiku-service.vercel.app/api?theme=catppuccin_mocha&type=vertical&border=true)
```

### Query Parameters
- `theme`: Color scheme (`catppuccin_mocha`, `dark`, `dracula`). Default: `catppuccin_mocha`.
- `type`: Layout (`vertical`, `horizontal`, `compact`). Default: `vertical`.
- `border`: Show border (`true`, `false`). Default: `true`.
- `refresh`: Force new haiku (`true`, `false`). Default: `false`.

### Example
```markdown
![Code Haiku](https://your-haiku-service.vercel.app/api?theme=dracula&type=horizontal&border=false)
```

## Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/code-haiku-generator.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Deploy to Vercel:
   ```bash
   vercel
   ```
4. Update the URL in your README with your Vercel domain.

## Contributing

Add words or templates by editing `lib/words.json` or `lib/templates.json` and submitting a PR!

## License

MIT