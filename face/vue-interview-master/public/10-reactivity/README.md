## 说一说你对vue响应式理解？

烂大街的问题，但却不是每个人都能回答到位。因为如果你只是看看别人写的网文，通常没什么底气，也经不住面试官推敲，但像我们这样即看过源码还造过轮子的，回答这个问题就会比较有底气。

### 答题思路：

1. 啥是响应式？
2. 为什么vue需要响应式？
3. 它能给我们带来什么好处？
4. vue的响应式是怎么实现的？有哪些优缺点？
5. vue3中的响应式的新变化





### 回答范例：

1. 所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制。
2. mvvm框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点的就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理。
3. 以vue为例说明，通过数据响应式加上虚拟DOM和patch算法，可以使我们只需要操作数据，完全不用接触繁琐的dom操作，从而大大提升开发效率，降低开发难度。
4. vue2中的数据响应式会根据数据类型来做不同处理，如果是对象则采用Object.defineProperty()的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应；如果是数组则通过覆盖该数组原型的方法，扩展它的7个变更方法，使这些方法可以额外的做更新通知，从而作出响应。这种机制很好的解决了数据响应化的问题，但在实际使用中也存在一些缺点：比如初始化时的递归遍历会造成性能损失；新增或删除属性时需要用户使用Vue.set/delete这样特殊的api才能生效；对于es6中新产生的Map、Set这些数据结构不支持等问题。
5. 为了解决这些问题，vue3重新编写了这一部分的实现：利用ES6的Proxy机制代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊api，初始化性能和内存消耗都得到了大幅改善；另外由于响应化的实现代码抽取为独立的reactivity包，使得我们可以更灵活的使用它，我们甚至不需要引入vue都可以体验。


### 知其所以然

vue2响应式：

https://github1s.com/vuejs/vue/blob/HEAD/src/core/observer/index.js#L135-L136

vue3响应式：

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/reactive.ts#L89-L90

https://github1s.com/vuejs/core/blob/HEAD/packages/reactivity/src/ref.ts#L67-L68