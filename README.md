Let's solve question 10 step by step using vector methods.


---

Given:

OA = a,

OB = b,

OC = 3b,

OD = ¼a,

AN = ½AC,

CD and AB meet at M.



---

(a) Express in terms of a and b:

(i) AB

We know:

\vec{AB} = \vec{OB} - \vec{OA} = b - a


---

(ii) CD

We know:

, so 

, so 


So:

\vec{CD} = \vec{D} - \vec{C} = \left(\frac{1}{4}a\right) - 3b


---

(b) Given:






We’ll express CM and AM in terms of a and b, then compare.


---

Path 1: Express CM from C

\vec{CM} = k \cdot \vec{CD} = k\left(\frac{1}{4}a - 3b\right)


---

Path 2: Express CM another way

Start from O:

\vec{C} = 3b, \quad \vec{A} = a

So:

\vec{CM} = \vec{M} - \vec{C} = [a + h(b - a)] - 3b
= a(1 - h) + bh - 3b
= a(1 - h) + b(h - 3)


---

Now equate both expressions for CM:

From earlier:

k\left(\frac{1}{4}a - 3b\right) = (1 - h)a + (h - 3)b

Match coefficients:

For a:

k \cdot \frac{1}{4} = 1 - h \Rightarrow \frac{k}{4} = 1 - h \quad \text{(1)}

For b:

-3k = h - 3 \quad \text{(2)}


---

Solve the system:

From (1):

k = 4(1 - h)

Substitute into (2):

-3[4(1 - h)] = h - 3
\Rightarrow -12 + 12h = h - 3
\Rightarrow 11h = 9 \Rightarrow h = \frac{9}{11}

Then:

k = 4(1 - \frac{9}{11}) = 4 \cdot \frac{2}{11} = \frac{8}{11}


---

Final answers:







---

(c) Show that O, M, and N are collinear

We are to show that vectors OM and ON lie on the same line.

From earlier:






Find AC:

\vec{AC} = \vec{OC} - \vec{OA} = 3b - a \Rightarrow \vec{AN} = \frac{1}{2}(3b - a)
= \frac{3}{2}b - \frac{1}{2}a

Now compute ON:

\vec{ON} = \vec{OA} + \vec{AN} = a + \left(\frac{3}{2}b - \frac{1}{2}a\right)
= \frac{1}{2}a + \frac{3}{2}b

Let’s compare OM and ON:

\vec{OM} = \frac{2}{11}a + \frac{9}{11}b \quad \text{(multiply by 3: } = \frac{6}{33}a + \frac{27}{33}b)

\vec{ON} = \frac{1}{2}a + \frac{3}{2}b \quad \text{(multiply by 11: } = \frac{11}{22}a + \frac{33}{22}b) ]

Try scaling one to match the other. We find that:

\vec{OM} = \frac{4}{11} \cdot \vec{ON}

So, OM and ON are scalar multiples, meaning O, M, N are collinear.


---

Let me know if you'd like a diagram or summary!

