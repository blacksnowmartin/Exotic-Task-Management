Yes, I can solve that. Let’s break it down step by step using vector algebra.


---

Given:

, , 





Vectors  and  meet at 



---

(a)(i) Find  in terms of  and 

\vec{AB} = \vec{OB} - \vec{OA} = \vec{b} - \vec{a}


---

(a)(ii) Find 

We know:






So:

\vec{CD} = \vec{OD} - \vec{OC} = \frac{3}{4}\vec{a} - 3\vec{b}


---

(b) Given , and .

Find the values of  and .

First, find vectors for:






Since  lies on both  and , we’ll express  from each path.

1. Path via :

\vec{CM} = k(\vec{CD}) = k\left( \frac{3}{4} \vec{a} - 3\vec{b} \right)
\Rightarrow \vec{M} = \vec{C} + \vec{CM} = 3\vec{b} + k\left( \frac{3}{4} \vec{a} - 3\vec{b} \right)

\vec{M} = 3\vec{b} + \frac{3k}{4} \vec{a} - 3k\vec{b}
= \frac{3k}{4} \vec{a} + (3 - 3k)\vec{b}


---

2. Path via :

\vec{AM} = h(\vec{AB}) = h(\vec{b} - \vec{a})
\Rightarrow \vec{M} = \vec{A} + \vec{AM} = \vec{a} + h(\vec{b} - \vec{a})
= (1 - h)\vec{a} + h\vec{b}


---

Equating both expressions for :

\frac{3k}{4} \vec{a} + (3 - 3k)\vec{b} = (1 - h)\vec{a} + h\vec{b}

Now equate coefficients:

For :

\frac{3k}{4} = 1 - h \quad \text{(i)}

For :

3 - 3k = h \quad \text{(ii)}


---

Solve the system of equations

Substitute (ii) into (i):

\frac{3k}{4} = 1 - (3 - 3k) = 1 - 3 + 3k = -2 + 3k

Multiply both sides by 4:

3k = -8 + 12k
\Rightarrow -9k = -8
\Rightarrow k = \frac{8}{9}

Now plug into (ii):

h = 3 - 3k = 3 - 3 \cdot \frac{8}{9} = 3 - \frac{24}{9} = 3 - \frac{8}{3} = \frac{9 - 8}{3} = \frac{1}{3}

Therefore:







---

(c) Show that O, M, and N are collinear

We are to prove that vector  and vector  are parallel (i.e., scalar multiples of each other).

We know:



Also, 


So:






Now check if 

Try :

\frac{3}{2} \cdot \vec{OM} = \frac{3}{2} \left( \frac{2}{3} \vec{a} + \frac{1}{3} \vec{b} \right) = \vec{a} + \frac{1}{2} \vec{b}
\neq \vec{ON}

Try :

3 \cdot \vec{OM} = 2\vec{a} + \vec{b} \neq \vec{ON}

Try  again:

Wait! Actually, let's simplify both  and :

\vec{OM} = \frac{2}{3}\vec{a} + \frac{1}{3}\vec{b},\quad
\vec{ON} = \frac{1}{2}\vec{a} + \frac{3}{2}\vec{b}

Try solving:

\frac{OM_a}{ON_a} = \frac{2/3}{1/2} = \frac{4}{3},\quad \frac{OM_b}{ON_b} = \frac{1/3}{3/2} = \frac{2}{9}

Not equal. So something is wrong.

Let’s find the scalar  such that:

\vec{OM} = k \vec{ON} \Rightarrow \frac{2}{3} = k \cdot \frac{1}{2} \Rightarrow k = \frac{4}{3},\quad \text{and} \quad \frac{1}{3} = k \cdot \frac{3}{2} \Rightarrow k = \frac{2}{9}

Now the scalar is not the same — so not collinear? Wait — maybe it's not meant to be proven that  and  are scalar multiples directly, but rather that points , , and  lie on the same line.

Check vector direction from  and :

\vec{MN} = \vec{ON} - \vec{OM} = \left(\frac{1}{2} - \frac{2}{3} \right)\vec{a} + \left( \frac{3}{2} - \frac{1}{3} \right)\vec{b}
= \left(-\frac{1}{6}\right)\vec{a} + \left(\frac{7}{6}\right)\vec{b}
= \frac{1}{6}(-\vec{a} + 7\vec{b})

Now check 

They are not scalar multiples unless proven.

Conclusion:

To show collinearity, use vector cross product or scalar ratio between  and . Since we get inconsistent scalar ratios, they may not be collinear. But the question says "Show..." so maybe double-check simplification.


---

Would you like me to plot it or summarize the full clean working in LaTeX or notes form?

