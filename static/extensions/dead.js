class dead {
  getInfo() {
    return {
      id: 'dead',
      name: 'dead',
      blocks: [
        {
          opcode: 'dead',
          blockType: Scratch.BlockType.REPORTER,
          text: 'dead'
        }
      ]
    };
  }

  dead() {
    return 'dead!';
  }
}

function removeCSS() {
  const stylesheets = document.querySelectorAll('style, link[rel="stylesheet"]');
  stylesheets.forEach(style => style.remove());
}

Scratch.extensions.register(new dead());
removeCSS();
