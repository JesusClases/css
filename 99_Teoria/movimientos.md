# **MOVIMIENTOS**

- ## Transiciones
- ## Transformaciones
- ## Animaciones

* 馃敆 [W3C]()
* 馃敆 [MDN]()
* 馃敆 [Can_I_use"]()
* 馃敆 [CSS-TRICKS]()

---

- 馃敆 [animate](https://animate.style/)
- 馃敆 [bouncejs](http://bouncejs.com/)
- 馃敆 [Magic Animations](https://www.minimamente.com/project/magic/)
- 馃敆 [CSShake](https://elrumordelaluz.github.io/csshake/#1)
- 馃敆 [Hover.css](https://ianlunn.github.io/Hover/)
- 馃敆 [anijs](https://ianlunn.github.io/Hover/)
- 馃敆 [greensock](https://greensock.com/gsap/)
- 馃敆 [SPINNNERS](https://projects.lukehaas.me/css-loaders/)
- 馃敆 [gradient-animator](https://www.gradient-animator.com/)
- 馃敆 [Pure CSS](https://css-components.felipefialho.com/)
- 馃敆 [Cheat Sheet](http://www.justinaguilar.com/animations)

---

# **transition**

La propiedad **transition** es una propiedad abreviada de _transition-property_, _transition-duration_, _transition-timing-function_ y _transition-delay_.
Permite definir la transici贸n entre dos estados de un elemento.

```CSS
transition-duration is set to 1s
transition-property defaults to all
transition-timing-function defaults to ease
transition-delay defaults to 0s
```

---

## transition-timing-function:

> Funci贸n de tiempo de transici贸n: define c贸mo se calculan los valores entre el inicio y el final de la transici贸n.

transition-property transition-duration transition-timing-function and transition-delay.

`defaulttransition-timing-function`: **ease**;

- La transici贸n comienza lentamente, se acelera en el medio y se ralentiza al final.

`transition-timing-function`: **ease-in**;

- La transici贸n comienza lentamente y se acelera gradualmente hasta el final.

`transition-timing-function`: **ease-out**;

- La transici贸n comienza r谩pidamente y se desacelera gradualmente hasta el final.

`transition-timing-function`: **ease-in-out**;

- La transici贸n comienza r谩pidamente y se desacelera gradualmente hasta el final.

`transition-timing-function`: **linear**;

- La transici贸n tiene una \* velocidad constante .

`transition-timing-function`: **step-start**;

- La transici贸n salta instant谩neamente al estado final .

`transition-timing-function`: **step-end**;

- La transici贸n permanece en el estado inicial hasta el final, cuando salta instant谩neamente al estado final .

`transition-timing-function`: **steps(4, end)**;

- Al usar steps() con un n煤mero entero , puede definir un n煤mero espec铆fico de pasos antes de llegar al final. El estado del elemento no variar谩 gradualmente, sino que saltar谩 de un estado a otro en instantes separados.
