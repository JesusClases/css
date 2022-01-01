# **MOVIMIENTOS**

- ## Transiciones
- ## Transformaciones
- ## Animaciones

* 🔗 [W3C]()
* 🔗 [MDN]()
* 🔗 [Can_I_use"]()
* 🔗 [CSS-TRICKS]()

---

- 🔗 [animate](https://animate.style/)
- 🔗 [bouncejs](http://bouncejs.com/)
- 🔗 [Magic Animations](https://www.minimamente.com/project/magic/)
- 🔗 [CSShake](https://elrumordelaluz.github.io/csshake/#1)
- 🔗 [Hover.css](https://ianlunn.github.io/Hover/)
- 🔗 [anijs](https://ianlunn.github.io/Hover/)
- 🔗 [greensock](https://greensock.com/gsap/)
- 🔗 [SPINNNERS](https://projects.lukehaas.me/css-loaders/)
- 🔗 [gradient-animator](https://www.gradient-animator.com/)
- 🔗 [Pure CSS](https://css-components.felipefialho.com/)
- 🔗 [Cheat Sheet](http://www.justinaguilar.com/animations)

---

# **transition**

La propiedad **transition** es una propiedad abreviada de _transition-property_, _transition-duration_, _transition-timing-function_ y _transition-delay_.
Permite definir la transición entre dos estados de un elemento.

```CSS
transition-duration is set to 1s
transition-property defaults to all
transition-timing-function defaults to ease
transition-delay defaults to 0s
```

---

## transition-timing-function:

> Función de tiempo de transición: define cómo se calculan los valores entre el inicio y el final de la transición.

transition-property transition-duration transition-timing-function and transition-delay.

`defaulttransition-timing-function`: **ease**;

- La transición comienza lentamente, se acelera en el medio y se ralentiza al final.

`transition-timing-function`: **ease-in**;

- La transición comienza lentamente y se acelera gradualmente hasta el final.

`transition-timing-function`: **ease-out**;

- La transición comienza rápidamente y se desacelera gradualmente hasta el final.

`transition-timing-function`: **ease-in-out**;

- La transición comienza rápidamente y se desacelera gradualmente hasta el final.

`transition-timing-function`: **linear**;

- La transición tiene una \* velocidad constante .

`transition-timing-function`: **step-start**;

- La transición salta instantáneamente al estado final .

`transition-timing-function`: **step-end**;

- La transición permanece en el estado inicial hasta el final, cuando salta instantáneamente al estado final .

`transition-timing-function`: **steps(4, end)**;

- Al usar steps() con un número entero , puede definir un número específico de pasos antes de llegar al final. El estado del elemento no variará gradualmente, sino que saltará de un estado a otro en instantes separados.
