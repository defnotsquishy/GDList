function o(n){const t=Math.max(1,Number(n)||1);return 500/(1+Math.pow((t-1)/35,.85))}function r(n){return Math.round(n*100)/100}function u(n){return r(o(n))}export{u as c,r};
