# Portfólio — Davi Lopes // Cybersecurity

## Estrutura de arquivos

```
portfolio/
├── index.html        ← Página principal (conteúdo e estrutura)
├── css/
│   └── style.css     ← Estilos, cores e layout
├── js/
│   └── main.js       ← Animações e interatividade
└── README.md         ← Este arquivo
```

---

## Como editar

Todos os arquivos têm comentários explicando o que cada parte faz.
Procure por comentários com `<!-- ... -->` no HTML e `/* ... */` no CSS/JS.

### Trocar informações pessoais → `index.html`
- Nome, handle, cargo → seção `#hero`
- Texto "sobre mim" → seção `#sobre`
- Habilidades → seção `#habilidades` (adicione/remova `<li>`)
- Certificações → seção `#certs` (adicione novos `cert-card`)
- Projetos → seção `#projetos` (siga o padrão comentado)
- Links de contato → seção `#contato`

### Trocar cores → `css/style.css`
As cores estão nas variáveis `:root` no topo do arquivo:
```css
--green: #00ff88;   /* cor de destaque principal */
--bg: #0a0a0a;      /* fundo */
--text: #e0e0e0;    /* texto */
```

### Ajustar animações → `js/main.js`
- Duração do boot: variável `BOOT_DURATION`
- Velocidade de digitação do nome: variável `SPEED`
- Para desabilitar o boot, comente o bloco "1. TELA DE BOOT"

---

## Como hospedar no GitHub Pages (gratuito e permanente)

1. Crie uma conta em https://github.com
2. Crie um repositório com o nome: `seuusuario.github.io`
3. Faça upload de todos os arquivos desta pasta
4. Vá em Settings → Pages → Source → selecione "main"
5. Aguarde 1-2 minutos e acesse: `https://seuusuario.github.io`

**Dica:** O link do GitHub Pages é fixo e permanente — perfeito para colocar
no LinkedIn e currículo.

---

## Como abrir localmente (para testar)

Abra o arquivo `index.html` diretamente no navegador.
Não é necessário nenhum servidor ou instalação.

Para usar no VSCode:
- Instale a extensão "Live Server"
- Clique com botão direito no `index.html` → "Open with Live Server"
