{
    let sqrt = Math.sqrt
    let sin = Math.sin
    let asin = Math.asin
    let cos = Math.cos
    let pow = Math.pow
    let exp = Math.exp
    let pi = Math.PI
    let abs = Math.abs
    E = {
        bounce(t){return 4 * t * (1 - t)},
        tri(t){return 1 - abs(2 * t - 1)},
        bell(t){return M.inOutQuint(M.tri(t))},
        pop(t){return 3.5 * (1 - t) * (1 - t) * sqrt(t)},
        tap(t){return 3.5 * t * t * sqrt(1 - t)},
        pulse(t){return t < 0.5 && M.tap(t * 2) || -M.pop(t * 2 - 1)},
        spike(t){return exp(-10 * abs(2 * t - 1))},
        inverse(t){return t * t * (1 - t) * (1 - t) / (0.5 - t)},
        instant(){return 1},
        linear(t){return t},
        inQuad(t){return t*t},
        outQuad(t){return -t*(t-2)},
        inOutQuad(t){t=t*2;if(t<1){return 0.5*t^2}else{return 1-0.5*(2-t)^2}},
        outInQuad(t){t=t*2;if(t<1){return 0.5-0.5*(1-t)^2}else{return 0.5+0.5*(t-1)^2}},
        inCubic(t){return t*t*t},
        outCubic(t){return 1-(1-t)^3},
        inOutCubic(t){t=t*2;if(t<1){return 0.5*t^3}else{return 1-0.5*(2-t)^3}},
        outInCubic(t){t=t*2;if(t<1){return 0.5-0.5*(1-t)^3}else{return 0.5+0.5*(t-1)^3}},
        inQuart(t){return t*t*t*t},
        outQuart(t){return 1-(1-t)^4},
        inOutQuart(t){t=t*2;if(t<1){return 0.5*t^4}else{return 1-0.5*(2-t)^4}},
        outInQuart(t){t=t*2;if(t<1){return 0.5-0.5*(1-t)^4}else{return 0.5+0.5*(t-1)^4}},
        inQuint(t){return t*t*t*t*t},
        outQuint(t){return 1-(1-t)^5},
        inOutQuint(t){t=t*2;if(t<1){return 0.5*t^5}else{return 1-0.5*(2-t)^5}},
        outInQuint(t){t=t*2;if(t<1){return 0.5-0.5*(1-t)^5}else{return 0.5+0.5*(t-1)^5}},
        inSine(t){return 1-cos(t*pi/2)},
        outSine(t){return sin(t*pi/2)},
    }
}