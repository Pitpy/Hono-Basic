// @bun
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS((exports, module) => {
  var Vo = function(e) {
    return typeof e == "function" ? e : (t) => t.$extends(e);
  };
  var Uo = function(e) {
    return e;
  };
  var Ko = function(...e) {
    return (t) => t;
  };
  var Wo = function(e) {
    return e.substring(0, 1).toLowerCase() + e.substring(1);
  };
  var di = function(e, t) {
    return t ? `${t}.${e}` : e;
  };
  var Xu = function(e) {
    let t = (0, zr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && zt.push([e, ...n]), zt.length > Zu && zt.shift(), t("", ...n)), t);
    return r;
  };
  var ss = function(e = 7500) {
    let t = zt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
    return t.length < e ? t : t.slice(-e);
  };
  var as = function() {
    zt.length = 0;
  };
  var q = function(e, t) {
    let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
    return function(o) {
      return !ec.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
    };
  };
  var Ei = function() {
    let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
    if (!(e && ds.default.existsSync(e)) && process.arch === "ia32")
      throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
  };
  var Xr = function(e, t) {
    let r = t === "url";
    return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Zr}.dylib.node` : `${Zr}-${e}.dylib.node` : r ? `${Zr}.so.node` : `${Zr}-${e}.so.node`;
  };
  var Te = function(e) {
    return Object.assign(e, { optional: () => rc(e), and: (t) => V(e, t), or: (t) => nc(e, t), select: (t) => t === undefined ? ms(e) : ms(t, e) });
  };
  var rc = function(e) {
    return Te({ [Be]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return t === undefined ? (Ze(e).forEach((i) => n(i, undefined)), { matched: true, selections: r }) : { matched: Ie(e, t, n), selections: r };
    }, getSelectionKeys: () => Ze(e), matcherType: "optional" }) });
  };
  var V = function(...e) {
    return Te({ [Be]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return { matched: e.every((i) => Ie(i, t, n)), selections: r };
    }, getSelectionKeys: () => Yt(e, Ze), matcherType: "and" }) });
  };
  var nc = function(...e) {
    return Te({ [Be]: () => ({ match: (t) => {
      let r = {}, n = (i, o) => {
        r[i] = o;
      };
      return Yt(e, Ze).forEach((i) => n(i, undefined)), { matched: e.some((i) => Ie(i, t, n)), selections: r };
    }, getSelectionKeys: () => Yt(e, Ze), matcherType: "or" }) });
  };
  var k = function(e) {
    return { [Be]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
  };
  var ms = function(...e) {
    let t = typeof e[0] == "string" ? e[0] : undefined, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? undefined : e[0];
    return Te({ [Be]: () => ({ match: (n) => {
      let i = { [t ?? tn]: n };
      return { matched: r === undefined || Ie(r, n, (o, s) => {
        i[o] = s;
      }), selections: i };
    }, getSelectionKeys: () => [t ?? tn].concat(r === undefined ? [] : Ze(r)) }) });
  };
  var Me = function(e) {
    return typeof e == "number";
  };
  var dt = function(e) {
    return typeof e == "string";
  };
  var ze = function(e) {
    return typeof e == "bigint";
  };
  var Mt = function(e) {
    return new _i(e, Ti);
  };
  var er = function(e) {
    return (0, Es.default)(e, e, { fallback: ce });
  };
  var tr = function(e, ...t) {
    ac.warn() && console.warn(`${sc.warn} ${e}`, ...t);
  };
  async function Cs() {
    let e = on.default.platform(), t = process.arch;
    if (e === "freebsd") {
      let s = await sn("freebsd-version");
      if (s && s.trim().length > 0) {
        let l = /^(\d+)\.?/.exec(s);
        if (l)
          return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
      }
    }
    if (e !== "linux")
      return { platform: e, arch: t };
    let r = await pc(), n = await xc(), i = mc({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await fc(i);
    return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
  }
  var cc = function(e) {
    let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = Mt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: undefined, familyDistro: undefined, originalDistro: l }));
    return me(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
  };
  async function pc() {
    let e = "/etc/os-release";
    try {
      let t = await Mi.default.readFile(e, { encoding: "utf-8" });
      return cc(t);
    } catch {
      return { targetDistro: undefined, familyDistro: undefined, originalDistro: undefined };
    }
  }
  var dc = function(e) {
    let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
    if (t) {
      let r = `${t[1]}.x`;
      return As(r);
    }
  };
  var Ps = function(e) {
    let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
    if (t) {
      let r = `${t[1]}${t[2] ?? ".0"}.x`;
      return As(r);
    }
  };
  var As = function(e) {
    let t = (() => {
      if (Ms(e))
        return e;
      let r = e.split(".");
      return r[1] = "0", r.join(".");
    })();
    if (uc.includes(t))
      return t;
  };
  var mc = function(e) {
    return Mt(e).with({ familyDistro: "musl" }, () => (me('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (me('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (me('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (me(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
  };
  async function fc(e) {
    let t = 'grep -v "libssl.so.0"', r = await vs(e);
    if (r) {
      me(`Found libssl.so file using platform-specific paths: ${r}`);
      let o = Ps(r);
      if (me(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "libssl-specific-path" };
    }
    me('Falling back to "ldconfig" and other generic paths');
    let n = await sn(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
    if (n || (n = await vs(["/lib64", "/usr/lib64", "/lib"])), n) {
      me(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
      let o = Ps(n);
      if (me(`The parsed libssl version is: ${o}`), o)
        return { libssl: o, strategy: "ldconfig" };
    }
    let i = await sn("openssl version -v");
    if (i) {
      me(`Found openssl binary with version: ${i}`);
      let o = dc(i);
      if (me(`The parsed openssl version is: ${o}`), o)
        return { libssl: o, strategy: "openssl-binary" };
    }
    return me("Couldn't find any version of libssl or OpenSSL in the system"), {};
  }
  async function vs(e) {
    for (let t of e) {
      let r = await gc(t);
      if (r)
        return r;
    }
  }
  async function gc(e) {
    try {
      return (await Mi.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
    } catch (t) {
      if (t.code === "ENOENT")
        return;
      throw t;
    }
  }
  async function ft() {
    let { binaryTarget: e } = await Rs();
    return e;
  }
  var yc = function(e) {
    return e.binaryTarget !== undefined;
  };
  async function Si() {
    let { memoized: e, ...t } = await Rs();
    return t;
  }
  async function Rs() {
    if (yc(nn))
      return Promise.resolve({ ...nn, memoized: true });
    let e = await Cs(), t = hc2(e);
    return nn = { ...e, binaryTarget: t }, { ...nn, memoized: false };
  }
  var hc2 = function(e) {
    let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
    t === "linux" && !["x64", "arm64"].includes(r) && tr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
    let l = "1.1.x";
    if (t === "linux" && i === undefined) {
      let c = Mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
      tr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
    }
    let u = "debian";
    if (t === "linux" && o === undefined && tr(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${er("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
      return "darwin-arm64";
    if (t === "darwin")
      return "darwin";
    if (t === "win32")
      return "windows";
    if (t === "freebsd")
      return o;
    if (t === "openbsd")
      return "openbsd";
    if (t === "netbsd")
      return "netbsd";
    if (t === "linux" && o === "nixos")
      return "linux-nixos";
    if (t === "linux" && r === "arm64")
      return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
    if (t === "linux" && r === "arm")
      return `linux-arm-openssl-${i || l}`;
    if (t === "linux" && o === "musl") {
      let c = "linux-musl";
      return !i || Ms(i) ? c : `${c}-openssl-${i}`;
    }
    return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && tr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
  };
  async function bc(e) {
    try {
      return await e();
    } catch {
      return;
    }
  }
  var sn = function(e) {
    return bc(async () => {
      let t = await lc(e);
      return me(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
    });
  };
  async function xc() {
    return typeof on.default.machine == "function" ? on.default.machine() : (await sn("uname -m"))?.trim();
  }
  var Ms = function(e) {
    return e.startsWith("1.");
  };
  var ks = function(e) {
    let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
      let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
      if (!a)
        return o;
      let l = a[1], u, c;
      if (l === "\\")
        c = a[0], u = c.replace("\\$", "$");
      else {
        let p = a[2];
        c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
      }
      return o.replace(c, u);
    }, n) ?? n;
    for (let n in e.parsed) {
      let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
      e.parsed[n] = r(i);
    }
    for (let n in e.parsed)
      t[n] = e.parsed[n];
    return e;
  };
  var rr = function({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
    let n = Fs(e);
    r.conflictCheck !== "none" && Mc(n, t, r.conflictCheck);
    let i = null;
    return Os(n?.path, t) || (i = Fs(t)), !n && !i && Di("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ve(de("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
  };
  var Mc = function(e, t, r) {
    let n = e?.dotenvResult.parsed, i = !Os(e?.path, t);
    if (n && t && i && un.default.existsSync(t)) {
      let o = ki.default.parse(un.default.readFileSync(t)), s = [];
      for (let a in o)
        n[a] === o[a] && s.push(a);
      if (s.length > 0) {
        let a = Dt.default.relative(process.cwd(), e.path), l = Dt.default.relative(process.cwd(), t);
        if (r === "error") {
          let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ce(a)} and ${ce(l)}
Conflicting env vars:
${s.map((c) => `  ${de(c)}`).join(`
`)}

We suggest to move the contents of ${ce(l)} to ${ce(a)} to consolidate your env vars.
`;
          throw new Error(u);
        } else if (r === "warn") {
          let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => de(c)).join(", ")} in ${ce(a)} and ${ce(l)}
Env vars from ${ce(l)} overwrite the ones from ${ce(a)}
      `;
          console.warn(`${Re("warn(prisma)")} ${u}`);
        }
      }
    }
  };
  var Fs = function(e) {
    if (Sc(e)) {
      Di(`Environment variables loaded from ${e}`);
      let t = ki.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : undefined });
      return { dotenvResult: ks(t), message: He(`Environment variables loaded from ${Dt.default.relative(process.cwd(), e)}`), path: e };
    } else
      Di(`Environment variables not found at ${e}`);
    return null;
  };
  var Os = function(e, t) {
    return e && t && Dt.default.resolve(e) === Dt.default.resolve(t);
  };
  var Sc = function(e) {
    return !!(e && un.default.existsSync(e));
  };
  var nr = function(e) {
    let t = Ic();
    return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : Ns);
  };
  var Ic = function() {
    let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
    return e === "library" ? "library" : e === "binary" ? "binary" : undefined;
  };
  var Vs = function() {
    return j.default.join(__dirname, "../");
  };
  var Ni = function(e) {
    if (process.platform === "win32")
      return;
    let t = Oi.default.statSync(e), r = t.mode | 64 | 8 | 1;
    if (t.mode === r) {
      Us(`Execution permissions of ${e} are fine`);
      return;
    }
    let n = r.toString(8).slice(-3);
    Us(`Have to call chmodPlusX on ${e}`), Oi.default.chmodSync(e, n);
  };
  var Li = function(e) {
    let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${er("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${He(e.id)}\`).`, s = Mt({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
      let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
      return `${r("libssl")}. Please install ${a} and try again.`;
    }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
    return `${o}
${s}

Details: ${t.message}`;
  };
  var $i = function(e) {
    return ir.default.sep === ir.default.posix.sep ? e : e.split(ir.default.sep).join(ir.default.posix.sep);
  };
  var Bi = function(e) {
    return String(new ji(e));
  };
  var Nc = function(e) {
    let t;
    if (e.length > 0) {
      let r = e.find((n) => n.fromEnvVar !== null);
      r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
    } else
      t = undefined;
    return t;
  };
  var Lc = function(e) {
    let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
    return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${$c(n)}`).join(`
`);
  };
  var $c = function(e) {
    return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
  };
  var qc = function(...e) {
    console.log(...e);
  };
  var Vi = function(e, ...t) {
    Gs.warn() && console.warn(`${or.warn} ${e}`, ...t);
  };
  var jc = function(e, ...t) {
    console.info(`${or.info} ${e}`, ...t);
  };
  var Bc = function(e, ...t) {
    console.error(`${or.error} ${e}`, ...t);
  };
  var Vc = function(e, ...t) {
    console.log(`${or.query} ${e}`, ...t);
  };
  var pn = function(e, t) {
    if (!e)
      throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
  };
  var gt = function(e, t) {
    throw new Error(t);
  };
  var Ki = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  var kt = function(e, t) {
    let r = {};
    for (let n of Object.keys(e))
      r[n] = t(e[n], n);
    return r;
  };
  var Gi = function(e, t) {
    if (e.length === 0)
      return;
    let r = e[0];
    for (let n = 1;n < e.length; n++)
      t(r, e[n]) < 0 && (r = e[n]);
    return r;
  };
  var v = function(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var lr = function(e) {
    let t;
    return { get() {
      return t || (t = { value: e() }), t.value;
    } };
  };
  var Zs = function(e, t) {
    let r = lr(() => Kc(t));
    Object.defineProperty(e, "dmmf", { get: () => r.get() });
  };
  var Kc = function(e) {
    return { datamodel: { models: Ji(e.models), enums: Ji(e.enums), types: Ji(e.types) } };
  };
  var Ji = function(e) {
    return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
  };
  var zi = function(e, t) {
    Object.defineProperty(e, "name", { value: t, configurable: true });
  };
  var mr = function(e) {
    return { ok: false, error: e, map() {
      return mr(e);
    }, flatMap() {
      return mr(e);
    } };
  };
  var yt = function(e, t) {
    return async (...r) => {
      try {
        return await t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return mr({ kind: "GenericJs", id: i });
      }
    };
  };
  var Hc = function(e, t) {
    return (...r) => {
      try {
        return t(...r);
      } catch (n) {
        let i = e.registerNewError(n);
        return mr({ kind: "GenericJs", id: i });
      }
    };
  };
  var Xs = function(e, t = ",", r = "", n = "") {
    if (e.length === 0)
      throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
    return new fe([r, ...Array(e.length - 1).fill(t), n], e);
  };
  var Xi = function(e) {
    return new fe([e], []);
  };
  var eo = function(e, ...t) {
    return new fe(e, t);
  };
  var fr = function(e) {
    return { getKeys() {
      return Object.keys(e);
    }, getPropertyValue(t) {
      return e[t];
    } };
  };
  var pe = function(e, t) {
    return { getKeys() {
      return [e];
    }, getPropertyValue() {
      return t();
    } };
  };
  var ht = function(e) {
    let t = new ke;
    return { getKeys() {
      return e.getKeys();
    }, getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    }, getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    } };
  };
  var hn = function(e) {
    let t = new Set(e);
    return { getOwnPropertyDescriptor: () => yn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
  };
  var Fe = function(e, t) {
    let r = Wc(t), n = new Set, i = new Proxy(e, { get(o, s) {
      if (n.has(s))
        return o[s];
      let a = r.get(s);
      return a ? a.getPropertyValue(s) : o[s];
    }, has(o, s) {
      if (n.has(s))
        return true;
      let a = r.get(s);
      return a ? a.has?.(s) ?? true : Reflect.has(o, s);
    }, ownKeys(o) {
      let s = ra(Reflect.ownKeys(o), r), a = ra(Array.from(r.keys()), r);
      return [...new Set([...s, ...a, ...n])];
    }, set(o, s, a) {
      return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
    }, getOwnPropertyDescriptor(o, s) {
      let a = Reflect.getOwnPropertyDescriptor(o, s);
      if (a && !a.configurable)
        return a;
      let l = r.get(s);
      return l ? l.getPropertyDescriptor ? { ...yn, ...l?.getPropertyDescriptor(s) } : yn : a;
    }, defineProperty(o, s, a) {
      return n.add(s), Reflect.defineProperty(o, s, a);
    } });
    return i[ta] = function(o, s, a = na.inspect) {
      let l = { ...this };
      return delete l[ta], a(l, s);
    }, i;
  };
  var Wc = function(e) {
    let t = new Map;
    for (let r of e) {
      let n = r.getKeys();
      for (let i of n)
        t.set(i, r);
    }
    return t;
  };
  var ra = function(e, t) {
    return e.filter((r) => t.get(r)?.has?.(r) ?? true);
  };
  var gr = function(e) {
    return { getKeys() {
      return e;
    }, has() {
      return false;
    }, getPropertyValue() {
    } };
  };
  var Nt = function(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  };
  var bn = function(e) {
    return e.toString() !== "Invalid Date";
  };
  var re = function(e) {
    var t, r, n, i = e.length - 1, o = "", s = e[0];
    if (i > 0) {
      for (o += s, t = 1;t < i; t++)
        n = e[t] + "", r = P - n.length, r && (o += Xe(r)), o += n;
      s = e[t], n = s + "", r = P - n.length, r && (o += Xe(r));
    } else if (s === 0)
      return "0";
    for (;s % 10 === 0; )
      s /= 10;
    return o + s;
  };
  var ge = function(e, t, r) {
    if (e !== ~~e || e < t || e > r)
      throw Error(tt + e);
  };
  var yr = function(e, t, r, n) {
    var i, o, s, a;
    for (o = e[0];o >= 10; o /= 10)
      --t;
    return --t < 0 ? (t += P, i = 0) : (i = Math.ceil((t + 1) / P), t %= P), o = G(10, P - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 50000 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1000 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1000 | 0) == G(10, t - 3) - 1, s;
  };
  var xn = function(e, t, r) {
    for (var n, i = [0], o, s = 0, a = e.length;s < a; ) {
      for (o = i.length;o--; )
        i[o] *= t;
      for (i[0] += to.indexOf(e.charAt(s++)), n = 0;n < i.length; n++)
        i[n] > r - 1 && (i[n + 1] === undefined && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
    }
    return i.reverse();
  };
  var tp = function(e, t) {
    var r, n, i;
    if (t.isZero())
      return t;
    n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / _n(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = $t(e, 1, t.times(i), new e(1));
    for (var o = r;o--; ) {
      var s = t.times(t);
      t = s.times(s).minus(s).times(8).plus(1);
    }
    return e.precision -= r, t;
  };
  var x = function(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor;
    e:
      if (t != null) {
        if (p = e.d, !p)
          return e;
        for (i = 1, a = p[0];a >= 10; a /= 10)
          i++;
        if (o = t - i, o < 0)
          o += P, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / P), a = p.length, d >= a)
          if (n) {
            for (;a++ <= d; )
              p.push(0);
            c = l = 0, i = 1, o %= P, s = o - P + 1;
          } else
            break e;
        else {
          for (c = a = p[d], i = 1;a >= 10; a /= 10)
            i++;
          o %= P, s = o - P + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || p[d + 1] !== undefined || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
          return p.length = 0, u ? (t -= e.e + 1, p[0] = G(10, (P - t % P) % P), e.e = -t || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, P - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u)
          for (;; )
            if (d == 0) {
              for (o = 1, s = p[0];s >= 10; s /= 10)
                o++;
              for (s = p[0] += a, a = 1;s >= 10; s /= 10)
                a++;
              o != a && (e.e++, p[0] == Ce && (p[0] = 1));
              break;
            } else {
              if (p[d] += a, p[d] != Ce)
                break;
              p[d--] = 0, a = 1;
            }
        for (o = p.length;p[--o] === 0; )
          p.pop();
      }
    return T && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
  };
  var Oe = function(e, t, r) {
    if (!e.isFinite())
      return ga(e);
    var n, i = e.e, o = re(e.d), s = o.length;
    return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Xe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Xe(-i - 1) + o, r && (n = r - s) > 0 && (o += Xe(n))) : i >= s ? (o += Xe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Xe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Xe(n))), o;
  };
  var Tn = function(e, t) {
    var r = e[0];
    for (t *= P;r >= 10; r /= 10)
      t++;
    return t;
  };
  var Pn = function(e, t, r) {
    if (t > ep)
      throw T = true, r && (e.precision = r), Error(la);
    return x(new e(wn), t, 1, true);
  };
  var _e = function(e, t, r) {
    if (t > no)
      throw Error(la);
    return x(new e(En), t, r, true);
  };
  var da = function(e) {
    var t = e.length - 1, r = t * P + 1;
    if (t = e[t], t) {
      for (;t % 10 == 0; t /= 10)
        r--;
      for (t = e[0];t >= 10; t /= 10)
        r++;
    }
    return r;
  };
  var Xe = function(e) {
    for (var t = "";e--; )
      t += "0";
    return t;
  };
  var ma = function(e, t, r, n) {
    var i, o = new e(1), s = Math.ceil(n / P + 4);
    for (T = false;; ) {
      if (r % 2 && (o = o.times(t), oa(o.d, s) && (i = true)), r = ae(r / 2), r === 0) {
        r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
        break;
      }
      t = t.times(t), oa(t.d, s);
    }
    return T = true, o;
  };
  var ia = function(e) {
    return e.d[e.d.length - 1] & 1;
  };
  var fa = function(e, t, r) {
    for (var n, i = new e(t[0]), o = 0;++o < t.length; )
      if (n = new e(t[o]), n.s)
        i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
    return i;
  };
  var io = function(e, t) {
    var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, h = d.precision;
    if (!e.d || !e.d[0] || e.e > 17)
      return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
    for (t == null ? (T = false, l = h) : l = t, a = new d(0.03125);e.e > -2; )
      e = e.times(a), p += 5;
    for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l;; ) {
      if (o = x(o.times(e), l, 1), r = r.times(++c), a = s.plus(L(o, r, l, 1)), re(a.d).slice(0, l) === re(s.d).slice(0, l)) {
        for (i = p;i--; )
          s = x(s.times(s), l, 1);
        if (t == null)
          if (u < 3 && yr(s.d, l - n, f, u))
            d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else
            return x(s, d.precision = h, f, T = true);
        else
          return d.precision = h, s;
      }
      s = a;
    }
  };
  var et = function(e, t) {
    var r, n, i, o, s, a, l, u, c, p, d, f = 1, h = 10, g = e, _ = g.d, A = g.constructor, R = A.rounding, E = A.precision;
    if (g.s < 0 || !_ || !_[0] || !g.e && _[0] == 1 && _.length == 1)
      return new A(_ && !_[0] ? -1 / 0 : g.s != 1 ? NaN : _ ? 0 : g);
    if (t == null ? (T = false, c = E) : c = t, A.precision = c += h, r = re(_), n = r.charAt(0), Math.abs(o = g.e) < 1500000000000000) {
      for (;n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
        g = g.times(e), r = re(g.d), n = r.charAt(0), f++;
      o = g.e, n > 1 ? (g = new A("0." + r), o++) : g = new A(n + "." + r.slice(1));
    } else
      return u = Pn(A, c + 2, E).times(o + ""), g = et(new A(n + "." + r.slice(1)), c - h).plus(u), A.precision = E, t == null ? x(g, E, R, T = true) : g;
    for (p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = x(g.times(g), c, 1), i = 3;; ) {
      if (s = x(s.times(d), c, 1), u = l.plus(L(s, new A(i), c, 1)), re(u.d).slice(0, c) === re(l.d).slice(0, c))
        if (l = l.times(2), o !== 0 && (l = l.plus(Pn(A, c + 2, E).times(o + ""))), l = L(l, new A(f), c, 1), t == null)
          if (yr(l.d, c - h, R, a))
            A.precision = c += h, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = x(g.times(g), c, 1), i = a = 1;
          else
            return x(l, A.precision = E, R, T = true);
        else
          return A.precision = E, l;
      l = u, i += 2;
    }
  };
  var ga = function(e) {
    return String(e.s * e.s / 0);
  };
  var oo = function(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0;t.charCodeAt(n) === 48; n++)
      ;
    for (i = t.length;t.charCodeAt(i - 1) === 48; --i)
      ;
    if (t = t.slice(n, i), t) {
      if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % P, r < 0 && (n += P), n < i) {
        for (n && e.d.push(+t.slice(0, n)), i -= P;n < i; )
          e.d.push(+t.slice(n, n += P));
        t = t.slice(n), n = P - t.length;
      } else
        n -= i;
      for (;n--; )
        t += "0";
      e.d.push(+t), T && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
    } else
      e.e = 0, e.d = [0];
    return e;
  };
  var rp = function(e, t) {
    var r, n, i, o, s, a, l, u, c;
    if (t.indexOf("_") > -1) {
      if (t = t.replace(/(\d)_(?=\d)/g, "$1"), pa.test(t))
        return oo(e, t);
    } else if (t === "Infinity" || t === "NaN")
      return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
    if (Yc.test(t))
      r = 16, t = t.toLowerCase();
    else if (zc.test(t))
      r = 2;
    else if (Zc.test(t))
      r = 8;
    else
      throw Error(tt + t);
    for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = ma(n, new n(r), o, o * 2)), u = xn(t, r, Ce), c = u.length - 1, o = c;u[o] === 0; --o)
      u.pop();
    return o < 0 ? new n(e.s * 0) : (e.e = Tn(u, c), e.d = u, T = false, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : bt.pow(2, l))), T = true, e);
  };
  var np = function(e, t) {
    var r, n = t.d.length;
    if (n < 3)
      return t.isZero() ? t : $t(e, 2, t, t);
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / _n(5, r)), t = $t(e, 2, t, t);
    for (var i, o = new e(5), s = new e(16), a = new e(20);r--; )
      i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
    return t;
  };
  var $t = function(e, t, r, n, i) {
    var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / P);
    for (T = false, l = r.times(r), a = new e(n);; ) {
      if (s = L(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== undefined) {
        for (o = p;s.d[o] === a.d[o] && o--; )
          ;
        if (o == -1)
          break;
      }
      o = a, a = n, n = s, s = o, u++;
    }
    return T = true, s.d.length = p + 1, s;
  };
  var _n = function(e, t) {
    for (var r = e;--t; )
      r *= e;
    return r;
  };
  var ya = function(e, t) {
    var r, n = t.s < 0, i = _e(e, e.precision, 1), o = i.times(0.5);
    if (t = t.abs(), t.lte(o))
      return Ue = n ? 4 : 1, t;
    if (r = t.divToInt(i), r.isZero())
      Ue = n ? 3 : 2;
    else {
      if (t = t.minus(r.times(i)), t.lte(o))
        return Ue = ia(r) ? n ? 2 : 3 : n ? 4 : 1, t;
      Ue = ia(r) ? n ? 1 : 4 : n ? 3 : 2;
    }
    return t.minus(i).abs();
  };
  var so = function(e, t, r, n) {
    var i, o, s, a, l, u, c, p, d, f = e.constructor, h = r !== undefined;
    if (h ? (ge(r, 1, rt), n === undefined ? n = f.rounding : ge(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
      c = ga(e);
    else {
      for (c = Oe(e), s = c.indexOf("."), h ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = xn(Oe(d), 10, i), d.e = d.d.length), p = xn(c, 10, i), o = l = p.length;p[--l] == 0; )
        p.pop();
      if (!p[0])
        c = h ? "0p+0" : "0";
      else {
        if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, r, n, 0, i), p = e.d, o = e.e, u = aa), s = p[r], a = i / 2, u = u || p[r + 1] !== undefined, u = n < 4 ? (s !== undefined || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
          for (;++p[--r] > i - 1; )
            p[r] = 0, r || (++o, p.unshift(1));
        for (l = p.length;!p[l - 1]; --l)
          ;
        for (s = 0, c = "";s < l; s++)
          c += to.charAt(p[s]);
        if (h) {
          if (l > 1)
            if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l;l % s; l++)
                c += "0";
              for (p = xn(c, i, t), l = p.length;!p[l - 1]; --l)
                ;
              for (s = 1, c = "1.";s < l; s++)
                c += to.charAt(p[s]);
            } else
              c = c.charAt(0) + "." + c.slice(1);
          c = c + (o < 0 ? "p" : "p+") + o;
        } else if (o < 0) {
          for (;++o; )
            c = "0" + c;
          c = "0." + c;
        } else if (++o > l)
          for (o -= l;o--; )
            c += "0";
        else
          o < l && (c = c.slice(0, o) + "." + c.slice(o));
      }
      c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
    }
    return e.s < 0 ? "-" + c : c;
  };
  var oa = function(e, t) {
    if (e.length > t)
      return e.length = t, true;
  };
  var ip = function(e) {
    return new this(e).abs();
  };
  var op = function(e) {
    return new this(e).acos();
  };
  var sp = function(e) {
    return new this(e).acosh();
  };
  var ap = function(e, t) {
    return new this(e).plus(t);
  };
  var lp = function(e) {
    return new this(e).asin();
  };
  var up = function(e) {
    return new this(e).asinh();
  };
  var cp = function(e) {
    return new this(e).atan();
  };
  var pp = function(e) {
    return new this(e).atanh();
  };
  var dp = function(e, t) {
    e = new this(e), t = new this(t);
    var r, n = this.precision, i = this.rounding, o = n + 4;
    return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = _e(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? _e(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = _e(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(L(e, t, o, 1)), t = _e(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(L(e, t, o, 1)), r;
  };
  var mp = function(e) {
    return new this(e).cbrt();
  };
  var fp = function(e) {
    return x(e = new this(e), e.e + 1, 2);
  };
  var gp = function(e, t, r) {
    return new this(e).clamp(t, r);
  };
  var yp = function(e) {
    if (!e || typeof e != "object")
      throw Error(vn + "Object expected");
    var t, r, n, i = e.defaults === true, o = ["precision", 1, rt, "rounding", 0, 8, "toExpNeg", -Lt, 0, "toExpPos", 0, Lt, "maxE", 0, Lt, "minE", -Lt, 0, "modulo", 0, 9];
    for (t = 0;t < o.length; t += 3)
      if (r = o[t], i && (this[r] = ro[r]), (n = e[r]) !== undefined)
        if (ae(n) === n && n >= o[t + 1] && n <= o[t + 2])
          this[r] = n;
        else
          throw Error(tt + r + ": " + n);
    if (r = "crypto", i && (this[r] = ro[r]), (n = e[r]) !== undefined)
      if (n === true || n === false || n === 0 || n === 1)
        if (n)
          if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
            this[r] = true;
          else
            throw Error(ua);
        else
          this[r] = false;
      else
        throw Error(tt + r + ": " + n);
    return this;
  };
  var hp = function(e) {
    return new this(e).cos();
  };
  var bp = function(e) {
    return new this(e).cosh();
  };
  var ha = function(e) {
    var t, r, n;
    function i(o) {
      var s, a, l, u = this;
      if (!(u instanceof i))
        return new i(o);
      if (u.constructor = i, sa(o)) {
        u.s = o.s, T ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
        return;
      }
      if (l = typeof o, l === "number") {
        if (o === 0) {
          u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
          return;
        }
        if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
          for (s = 0, a = o;a >= 10; a /= 10)
            s++;
          T ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
          return;
        } else if (o * 0 !== 0) {
          o || (u.s = NaN), u.e = NaN, u.d = null;
          return;
        }
        return oo(u, o.toString());
      } else if (l !== "string")
        throw Error(tt + o);
      return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), pa.test(o) ? oo(u, o) : rp(u, o);
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = yp, i.clone = ha, i.isDecimal = sa, i.abs = ip, i.acos = op, i.acosh = sp, i.add = ap, i.asin = lp, i.asinh = up, i.atan = cp, i.atanh = pp, i.atan2 = dp, i.cbrt = mp, i.ceil = fp, i.clamp = gp, i.cos = hp, i.cosh = bp, i.div = xp, i.exp = wp, i.floor = Ep, i.hypot = Pp, i.ln = vp, i.log = Tp, i.log10 = Cp, i.log2 = _p, i.max = Ap, i.min = Rp, i.mod = Mp, i.mul = Sp, i.pow = Ip, i.random = Dp, i.round = kp, i.sign = Fp, i.sin = Op, i.sinh = Np, i.sqrt = Lp, i.sub = $p, i.sum = qp, i.tan = jp, i.tanh = Bp, i.trunc = Vp, e === undefined && (e = {}), e && e.defaults !== true)
      for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0;t < n.length; )
        e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i;
  };
  var xp = function(e, t) {
    return new this(e).div(t);
  };
  var wp = function(e) {
    return new this(e).exp();
  };
  var Ep = function(e) {
    return x(e = new this(e), e.e + 1, 3);
  };
  var Pp = function() {
    var e, t, r = new this(0);
    for (T = false, e = 0;e < arguments.length; )
      if (t = new this(arguments[e++]), t.d)
        r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s)
          return T = true, new this(1 / 0);
        r = t;
      }
    return T = true, r.sqrt();
  };
  var sa = function(e) {
    return e instanceof bt || e && e.toStringTag === ca || false;
  };
  var vp = function(e) {
    return new this(e).ln();
  };
  var Tp = function(e, t) {
    return new this(e).log(t);
  };
  var _p = function(e) {
    return new this(e).log(2);
  };
  var Cp = function(e) {
    return new this(e).log(10);
  };
  var Ap = function() {
    return fa(this, arguments, "lt");
  };
  var Rp = function() {
    return fa(this, arguments, "gt");
  };
  var Mp = function(e, t) {
    return new this(e).mod(t);
  };
  var Sp = function(e, t) {
    return new this(e).mul(t);
  };
  var Ip = function(e, t) {
    return new this(e).pow(t);
  };
  var Dp = function(e) {
    var t, r, n, i, o = 0, s = new this(1), a = [];
    if (e === undefined ? e = this.precision : ge(e, 1, rt), n = Math.ceil(e / P), this.crypto)
      if (crypto.getRandomValues)
        for (t = crypto.getRandomValues(new Uint32Array(n));o < n; )
          i = t[o], i >= 4290000000 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4);o < n; )
          i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 2140000000 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else
        throw Error(ua);
    else
      for (;o < n; )
        a[o++] = Math.random() * 1e7 | 0;
    for (n = a[--o], e %= P, n && e && (i = G(10, P - e), a[o] = (n / i | 0) * i);a[o] === 0; o--)
      a.pop();
    if (o < 0)
      r = 0, a = [0];
    else {
      for (r = -1;a[0] === 0; r -= P)
        a.shift();
      for (n = 1, i = a[0];i >= 10; i /= 10)
        n++;
      n < P && (r -= P - n);
    }
    return s.e = r, s.d = a, s;
  };
  var kp = function(e) {
    return x(e = new this(e), e.e + 1, this.rounding);
  };
  var Fp = function(e) {
    return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
  };
  var Op = function(e) {
    return new this(e).sin();
  };
  var Np = function(e) {
    return new this(e).sinh();
  };
  var Lp = function(e) {
    return new this(e).sqrt();
  };
  var $p = function(e, t) {
    return new this(e).sub(t);
  };
  var qp = function() {
    var e = 0, t = arguments, r = new this(t[e]);
    for (T = false;r.s && ++e < t.length; )
      r = r.plus(t[e]);
    return T = true, x(r, this.precision, this.rounding);
  };
  var jp = function(e) {
    return new this(e).tan();
  };
  var Bp = function(e) {
    return new this(e).tanh();
  };
  var Vp = function(e) {
    return x(e = new this(e), e.e + 1, 1);
  };
  var qt = function(e) {
    return bt.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
  };
  var jt = function(e) {
    return e instanceof hr;
  };
  var Sn = function(e) {
    return new ao(wa(e));
  };
  var wa = function(e) {
    let t = new z;
    for (let [r, n] of Object.entries(e)) {
      let i = new Mn(r, Ea(n));
      t.addField(i);
    }
    return t;
  };
  var Ea = function(e) {
    if (typeof e == "string")
      return new Y(JSON.stringify(e));
    if (typeof e == "number" || typeof e == "boolean")
      return new Y(String(e));
    if (typeof e == "bigint")
      return new Y(`${e}n`);
    if (e === null)
      return new Y("null");
    if (e === undefined)
      return new Y("undefined");
    if (qt(e))
      return new Y(`new Prisma.Decimal("${e.toFixed()}")`);
    if (e instanceof Uint8Array)
      return Buffer.isBuffer(e) ? new Y(`Buffer.alloc(${e.byteLength})`) : new Y(`new Uint8Array(${e.byteLength})`);
    if (e instanceof Date) {
      let t = bn(e) ? e.toISOString() : "Invalid Date";
      return new Y(`new Date("${t}")`);
    }
    return e instanceof De ? new Y(`Prisma.${e._getName()}`) : jt(e) ? new Y(`prisma.${Wo(e.modelName)}.\$fields.${e.name}`) : Array.isArray(e) ? Kp(e) : typeof e == "object" ? wa(e) : new Y(Object.prototype.toString.call(e));
  };
  var Kp = function(e) {
    let t = new Vt;
    for (let r of e)
      t.addItem(Ea(r));
    return t;
  };
  var Pa = function(e) {
    if (e === undefined)
      return "";
    let t = Sn(e);
    return new Ot(0, { colors: Rn }).write(t).toString();
  };
  var va = function(e) {
    var t = e.split(`
`);
    return t.reduce(function(r, n) {
      var i = Jp(n) || Wp(n) || Zp(n) || rd(n) || ed(n);
      return i && r.push(i), r;
    }, []);
  };
  var Jp = function(e) {
    var t = Qp.exec(e);
    if (!t)
      return null;
    var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Gp.exec(t[2]);
    return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || br, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
  };
  var Wp = function(e) {
    var t = Hp.exec(e);
    return t ? { file: t[2], methodName: t[1] || br, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  };
  var Zp = function(e) {
    var t = zp.exec(e);
    if (!t)
      return null;
    var r = t[3] && t[3].indexOf(" > eval") > -1, n = Yp.exec(t[3]);
    return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || br, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
  };
  var ed = function(e) {
    var t = Xp.exec(e);
    return t ? { file: t[3], methodName: t[1] || br, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
  };
  var rd = function(e) {
    var t = td.exec(e);
    return t ? { file: t[2], methodName: t[1] || br, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
  };
  var it = function(e) {
    return e === "minimal" ? new lo : new uo;
  };
  var Ut = function(e = {}) {
    let t = id(e);
    return Object.entries(t).reduce((n, [i, o]) => (Ta[i] !== undefined ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
  };
  var id = function(e = {}) {
    return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
  };
  var In = function(e = {}) {
    return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
  };
  var _a = function(e, t) {
    let r = In(e);
    return t({ action: "aggregate", unpacker: r, argsMapper: Ut })(e);
  };
  var od = function(e = {}) {
    let { select: t, ...r } = e;
    return typeof t == "object" ? Ut({ ...r, _count: t }) : Ut({ ...r, _count: { _all: true } });
  };
  var sd = function(e = {}) {
    return typeof e.select == "object" ? (t) => In(e)(t)._count : (t) => In(e)(t)._count._all;
  };
  var Ca = function(e, t) {
    return t({ action: "count", unpacker: sd(e), argsMapper: od })(e);
  };
  var ad = function(e = {}) {
    let t = Ut(e);
    if (Array.isArray(t.by))
      for (let r of t.by)
        typeof r == "string" && (t.select[r] = true);
    else
      typeof t.by == "string" && (t.select[t.by] = true);
    return t;
  };
  var ld = function(e = {}) {
    return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
      r._count = r._count._all;
    }), t);
  };
  var Aa = function(e, t) {
    return t({ action: "groupBy", unpacker: ld(e), argsMapper: ad })(e);
  };
  var Ra = function(e, t, r) {
    if (t === "aggregate")
      return (n) => _a(n, r);
    if (t === "count")
      return (n) => Ca(n, r);
    if (t === "groupBy")
      return (n) => Aa(n, r);
  };
  var Ma = function(e, t) {
    let r = t.fields.filter((i) => !i.relationName), n = Qi(r, (i) => i.name);
    return new Proxy({}, { get(i, o) {
      if (o in i || typeof o == "symbol")
        return i[o];
      let s = n[o];
      if (s)
        return new hr(e, o, s.type, s.isList, s.kind === "enum");
    }, ...hn(Object.keys(n)) });
  };
  var ud = function(e, t) {
    return e === undefined || t === undefined ? [] : [...t, "select", e];
  };
  var cd = function(e, t, r) {
    return t === undefined ? e ?? {} : Ia(t, r, e || true);
  };
  var po = function(e, t, r, n, i, o) {
    let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
    return (l) => {
      let u = it(e._errorFormat), c = ud(n, i), p = cd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = pd(e, t);
      return new Proxy(d, { get(h, g) {
        if (!f.includes(g))
          return h[g];
        let A = [a[g].type, r, g], R = [c, p];
        return po(e, ...A, ...R);
      }, ...hn([...f, ...Object.getOwnPropertyNames(d)]) });
    };
  };
  var pd = function(e, t) {
    return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
  };
  var Ae = function(e, t, r, n, i) {
    this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
  };
  var fd = function(e) {
    return Da[e] || dd;
  };
  var ka = function(e) {
    return gd(e, C.languages.javascript);
  };
  var gd = function(e, t) {
    return C.tokenize(e, t).map((n) => Ae.stringify(n)).join("");
  };
  var Oa = function(e) {
    return (0, Fa.default)(e);
  };
  var bd = function({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
    let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? false, callArguments: i };
    if (!e || typeof window < "u" || false)
      return s;
    let a = e.getLocation();
    if (!a || !a.lineNumber || !a.columnNumber)
      return s;
    let l = Math.max(1, a.lineNumber - 3), u = kn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
    if (u && c) {
      let p = wd(c), d = xd(c);
      if (!d)
        return s;
      s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (h) => h.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
      let f = String(u.lastLineNumber).length;
      if (s.contextLines = u.mapLines((h, g) => o.gray(String(g).padStart(f)) + " " + h).mapLines((h) => o.dim(h)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
        let h = p + f + 1;
        h += 2, s.callArguments = (0, La.default)(i, h).slice(h);
      }
    }
    return s;
  };
  var xd = function(e) {
    let t = Object.keys(Ee.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
    if (n) {
      let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
      return { code: e.slice(o, i), openingBraceIndex: i };
    }
    return null;
  };
  var wd = function(e) {
    let t = 0;
    for (let r = 0;r < e.length; r++) {
      if (e.charAt(r) !== " ")
        return t;
      t++;
    }
    return t;
  };
  var Ed = function({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
    let a = [""], l = t ? " in" : ":";
    if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Pd(t))), i) {
      a.push("");
      let u = [i.toString()];
      o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
    } else
      a.push(""), o && a.push(o), a.push("");
    return a.push(r), a.join(`
`);
  };
  var Pd = function(e) {
    let t = [e.fileName];
    return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
  };
  var Kt = function(e) {
    let t = e.showColors ? yd : hd, r = bd(e, t);
    return Ed(r, t);
  };
  var $a = function(e, t, r, n) {
    return e === Ee.ModelAction.findFirstOrThrow || e === Ee.ModelAction.findUniqueOrThrow ? vd(t, r, n) : n;
  };
  var vd = function(e, t, r) {
    return async (n) => {
      if ("rejectOnNotFound" in n.args) {
        let o = Kt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
        throw new te(o, { clientVersion: t });
      }
      return await r(n).catch((o) => {
        throw o instanceof H && o.code === "P2025" ? new Ve(`No ${e} found`, t) : o;
      });
    };
  };
  var $e = function(e) {
    return e.replace(/^./, (t) => t.toLowerCase());
  };
  var mo = function(e, t) {
    let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Cd(e, t), Rd(e, t), fr(r), pe("name", () => t), pe("$name", () => t), pe("$parent", () => e._appliedParent)];
    return Fe({}, n);
  };
  var Cd = function(e, t) {
    let r = $e(t), n = Object.keys(Ee.ModelAction).concat("count");
    return { getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = i, s = (l) => e._request(l);
      s = $a(o, t, e._clientVersion, s);
      let a = (l) => (u) => {
        let c = it(e._errorFormat);
        return e._createPrismaPromise((p) => {
          let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
          return s({ ...d, ...l });
        });
      };
      return Td.includes(o) ? po(e, t, a) : Ad(i) ? Ra(e, i, a) : a({});
    } };
  };
  var Ad = function(e) {
    return _d.includes(e);
  };
  var Rd = function(e, t) {
    return ht(pe("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return Ma(t, r);
    }));
  };
  var qa = function(e) {
    return e.replace(/^./, (t) => t.toUpperCase());
  };
  var xr = function(e) {
    let t = [Md(e), pe(fo, () => e), pe("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
    return r && t.push(fr(r)), Fe(e, t);
  };
  var Md = function(e) {
    let t = Object.keys(e._runtimeDataModel.models), r = t.map($e), n = [...new Set(t.concat(r))];
    return ht({ getKeys() {
      return n;
    }, getPropertyValue(i) {
      let o = qa(i);
      if (e._runtimeDataModel.models[o] !== undefined)
        return mo(e, o);
      if (e._runtimeDataModel.models[i] !== undefined)
        return mo(e, i);
    }, getPropertyDescriptor(i) {
      if (!r.includes(i))
        return { enumerable: false };
    } });
  };
  var Fn = function(e) {
    return e[fo] ? e[fo] : e;
  };
  var ja = function(e) {
    if (typeof e == "function")
      return e(this);
    let t = Fn(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: undefined }, $on: { value: undefined } });
    return xr(r);
  };
  var Ba = function({ result: e, modelName: t, select: r, extensions: n }) {
    let i = n.getAllComputedFields(t);
    if (!i)
      return e;
    let o = [], s = [];
    for (let a of Object.values(i)) {
      if (r) {
        if (!r[a.name])
          continue;
        let l = a.needs.filter((u) => !r[u]);
        l.length > 0 && s.push(gr(l));
      }
      Sd(e, a.needs) && o.push(Id(a, Fe(e, o)));
    }
    return o.length > 0 || s.length > 0 ? Fe(e, [...o, ...s]) : e;
  };
  var Sd = function(e, t) {
    return t.every((r) => Ki(e, r));
  };
  var Id = function(e, t) {
    return ht(pe(e.name, () => e.compute(t)));
  };
  var On = function({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
    if (Array.isArray(t)) {
      for (let s = 0;s < t.length; s++)
        t[s] = On({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
      return t;
    }
    let o = e(t, i, r) ?? t;
    return r.include && Va({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Va({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
  };
  var Va = function({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
    for (let [o, s] of Object.entries(e)) {
      if (!s || t[o] == null)
        continue;
      let l = n.models[r].fields.find((c) => c.name === o);
      if (!l || l.kind !== "object" || !l.relationName)
        continue;
      let u = typeof s == "object" ? s : {};
      t[o] = On({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
    }
  };
  var Ua = function({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
    return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : On({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Ba({ result: s, modelName: $e(a), select: l.select, extensions: n }) });
  };
  var Ka = function(e) {
    if (e instanceof fe)
      return Dd(e);
    if (Array.isArray(e)) {
      let r = [e[0]];
      for (let n = 1;n < e.length; n++)
        r[n] = wr(e[n]);
      return r;
    }
    let t = {};
    for (let r in e)
      t[r] = wr(e[r]);
    return t;
  };
  var Dd = function(e) {
    return new fe(e.strings, e.values);
  };
  var wr = function(e) {
    if (typeof e != "object" || e == null || e instanceof De || jt(e))
      return e;
    if (qt(e))
      return new Ne(e.toFixed());
    if (Nt(e))
      return new Date(+e);
    if (ArrayBuffer.isView(e))
      return e.slice(0);
    if (Array.isArray(e)) {
      let t = e.length, r;
      for (r = Array(t);t--; )
        r[t] = wr(e[t]);
      return r;
    }
    if (typeof e == "object") {
      let t = {};
      for (let r in e)
        r === "__proto__" ? Object.defineProperty(t, r, { value: wr(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = wr(e[r]);
      return t;
    }
    gt(e, "Unknown value");
  };
  var Ga = function(e, t, r, n = 0) {
    return e._createPrismaPromise((i) => {
      let o = t.customDataProxyFetch;
      return "transaction" in t && i !== undefined && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ka(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = za(o, l), a.args = s, Ga(e, a, r, n + 1);
      } });
    });
  };
  var Ja = function(e, t) {
    let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
    if (e._extensions.isEmpty())
      return e._executeRequest(t);
    let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
    return Ga(e, t, s);
  };
  var Ha = function(e) {
    return (t) => {
      let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
      return n.length ? Wa(r, n, 0, e) : e(r);
    };
  };
  var Wa = function(e, t, r, n) {
    if (r === t.length)
      return n(e);
    let i = e.customDataProxyFetch, o = e.requests[0].transaction;
    return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : undefined } : undefined }, __internalParams: e, query(s, a = e) {
      let l = a.customDataProxyFetch;
      return a.customDataProxyFetch = za(i, l), Wa(a, t, r + 1, n);
    } });
  };
  var za = function(e = Qa, t = Qa) {
    return (r) => e(t(r));
  };
  var Za = function(e, t, r) {
    let n = $e(r);
    return !t.result || !(t.result.$allModels || t.result[n]) ? e : kd({ ...e, ...Ya(t.name, e, t.result.$allModels), ...Ya(t.name, e, t.result[n]) });
  };
  var kd = function(e) {
    let t = new ke, r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
    return kt(e, (n) => ({ ...n, needs: r(n.name, new Set) }));
  };
  var Ya = function(e, t, r) {
    return r ? kt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Fd(t, o, i) })) : {};
  };
  var Fd = function(e, t, r) {
    let n = e?.[t]?.compute;
    return n ? (i) => r({ ...i, [t]: n(i) }) : r;
  };
  var Xa = function(e, t) {
    if (!t)
      return e;
    let r = { ...e };
    for (let n of Object.values(t))
      if (e[n.name])
        for (let i of n.needs)
          r[i] = true;
    return r;
  };
  var rl = function({ postinstall: e, ciName: t, clientVersion: r }) {
    if (el("checkPlatformCaching:postinstall", e), el("checkPlatformCaching:ciName", t), e === true && t && t in tl) {
      let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${tl[t]}-build`;
      throw console.error(n), new O(n, r);
    }
  };
  var nl = function(e, t) {
    return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
  };
  var $n = function() {
    return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Od ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Nd ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
  };
  var Er = function({ error: e, user_facing_error: t }, r) {
    return t.error_code ? new H(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new W(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
  };
  var qn = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Ld(e)}`;
  };
  var Ld = function(e) {
    let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
    return Bi({ ...t, binaryTargets: o });
  };
  var ot = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
  };
  var st = function(e) {
    let { searchedLocations: t } = e;
    return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
  };
  var il = function(e) {
    let { runtimeBinaryTarget: t } = e;
    return `${ot(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${qn(e)}

${st(e)}`;
  };
  var jn = function(e) {
    return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
  };
  var Bn = function(e) {
    let { errorStack: t } = e;
    return t?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
  };
  var ol = function(e) {
    let { queryEngineName: t } = e;
    return `${ot(e)}${Bn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${jn("engine-not-found-bundler-investigation")}

${st(e)}`;
  };
  var sl = function(e) {
    let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
    return `${ot(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${qn(e)}

${st(e)}`;
  };
  var al = function(e) {
    let { queryEngineName: t } = e;
    return `${ot(e)}${Bn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${jn("engine-not-found-tooling-investigation")}

${st(e)}`;
  };
  async function ul(e, t) {
    let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
    if (r !== undefined)
      return r;
    let { enginePath: n, searchedLocations: i } = await jd(e, t);
    if ($d("enginePath", n), n !== undefined && e === "binary" && Ni(n), n !== undefined)
      return t.prismaPath = n;
    let o = await ft(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(qd()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: cl(e, o), expectedLocation: Pr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
    throw a && l ? p = sl(c) : l ? p = il(c) : u ? p = ol(c) : p = al(c), new O(p, t.clientVersion);
  }
  async function jd(engineType, config) {
    let binaryTarget = await ft(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Pr.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, Pr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
    __filename.includes("resolveEnginePath") && searchLocations.push(Vs());
    for (let e of searchLocations) {
      let t = cl(engineType, binaryTarget), r = Pr.default.join(e, t);
      if (searchedLocations.push(e), ll.default.existsSync(r))
        return { enginePath: r, searchedLocations };
    }
    return { enginePath: undefined, searchedLocations };
  }
  function cl(e, t) {
    return e === "library" ? Xr(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
  }
  function Vn(e, t) {
    return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : undefined };
  }
  function pl(e) {
    return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
  }
  function dl(e) {
    return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
  }
  function fl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
    return (0, ml.default)({ user: t, repo: r, template: n, title: e, body: i });
  }
  function gl({ version: e, binaryTarget: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
    let a = ss(6000 - (s?.length ?? 0)), l = dl((0, go.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, go.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? pl(s) : ""}
\`\`\`
`), p = fl({ title: r, body: c });
    return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ce(p)}

If you want the Prisma team to look into it, please open the link above \uD83D\uDE4F
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
  }
  function Un({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
    let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
    if (o === undefined ? i = undefined : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== undefined && i === undefined)
      throw new O(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
    if (i === undefined)
      throw new O("error: Missing URL environment variable, value, or override.", n);
    return i;
  }
  function I(e, t) {
    return { ...e, isRetryable: t };
  }
  async function Ud(e) {
    let t;
    try {
      t = await e.text();
    } catch {
      return { type: "EmptyError" };
    }
    try {
      let r = JSON.parse(t);
      if (typeof r == "string")
        switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
      if (typeof r == "object" && r !== null) {
        if ("is_panic" in r && "message" in r && "error_code" in r)
          return { type: "QueryEngineError", body: r };
        if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
          let n = Object.values(r)[0].reason;
          return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
        }
      }
      return { type: "UnknownJsonError", body: r };
    } catch {
      return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
    }
  }
  async function kr(e, t) {
    if (e.ok)
      return;
    let r = { clientVersion: t, response: e }, n = await Ud(e);
    if (n.type === "QueryEngineError")
      throw new H(n.body.message, { code: n.body.error_code, clientVersion: t });
    if (n.type === "DataProxyError") {
      if (n.body === "InternalDataProxyError")
        throw new Jt(r, "Internal Data Proxy error");
      if ("EngineNotStarted" in n.body) {
        if (n.body.EngineNotStarted.reason === "SchemaMissing")
          return new Et(r);
        if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
          throw new Cr(r);
        if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
          throw new _r(r, i, o);
        }
        if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
          let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
          throw new O(i, t, o);
        }
        if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
          let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
          throw new Tr(r, i);
        }
      }
      if ("InteractiveTransactionMisrouted" in n.body) {
        let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
        throw new Rr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
      }
      if ("InvalidRequestError" in n.body)
        throw new Mr(r, n.body.InvalidRequestError.reason);
    }
    if (e.status === 401 || e.status === 403)
      throw new Ir(r, Ht(wo, n));
    if (e.status === 404)
      return new Sr(r, Ht(bo, n));
    if (e.status === 429)
      throw new Dr(r, Ht(Eo, n));
    if (e.status === 504)
      throw new Ar(r, Ht(ho, n));
    if (e.status >= 500)
      throw new Jt(r, Ht(xo, n));
    if (e.status >= 400)
      throw new vr(r, Ht(yo, n));
  }
  function Ht(e, t) {
    return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
  }
  function yl(e) {
    let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
    return new Promise((i) => setTimeout(() => i(n), n));
  }
  function hl(e) {
    if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
      throw new O("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
  }
  function Kd(e) {
    return e[0] * 1000 + e[1] / 1e6;
  }
  function bl(e) {
    return new Date(Kd(e));
  }
  async function Pt(e, t, r = (n) => n) {
    let n = t.clientVersion;
    try {
      return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Po)(e, t);
    } catch (i) {
      let o = i.message ?? "Unknown error";
      throw new Fr(o, { clientVersion: n });
    }
  }
  function Gd(e) {
    return { ...e.headers, "Content-Type": "application/json" };
  }
  function Jd(e) {
    return { method: e.method, headers: Gd(e) };
  }
  function Hd(e, t) {
    return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new vo(t.headers) };
  }
  async function Po(e, t = {}) {
    let r = Wd("https"), n = Jd(t), i = [], { origin: o } = new URL(e);
    return new Promise((s, a) => {
      let l = r.request(e, n, (u) => {
        let { statusCode: c, headers: { location: p } } = u;
        c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(Po(`${o}${p}`, t)) : s(Po(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Hd(i, u))), u.on("error", a);
      });
      l.on("error", a), l.end(t.body ?? "");
    });
  }
  async function Yd(e, t) {
    let r = xl["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
    if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
      return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
    if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
      return n;
    let [i, o] = n?.split("-") ?? [];
    if (o === undefined && zd.test(i))
      return i;
    if (o !== undefined || n === "0.0.0" || n === "in-memory") {
      if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
        return "0.0.0";
      let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = Zd(`<=${a}.${l}.${u}`), p = await Pt(c, { clientVersion: n });
      if (!p.ok)
        throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
      let d = await p.text();
      wl("length of body fetched from unpkg.com", d.length);
      let f;
      try {
        f = JSON.parse(d);
      } catch (h) {
        throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), h;
      }
      return f.version;
    }
    throw new wt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
  }
  async function El(e, t) {
    let r = await Yd(e, t);
    return wl("version", r), r;
  }
  function Zd(e) {
    return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
  }
  function vl(e) {
    if (e?.kind === "itx")
      return e.options.id;
  }
  function Xd() {
    let e = globalThis;
    return e[Co] === undefined && (e[Co] = {}), e[Co];
  }
  function em(e) {
    let t = Xd();
    if (t[e] !== undefined)
      return t[e];
    let r = Tl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
    return process.platform !== "win32" && (i = Ao.default.constants.dlopen.RTLD_LAZY | Ao.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
  }
  function Mo(e) {
    b2 = e;
  }
  function y(e) {
    return Ke[e];
  }
  function Wn() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(b2.memory.buffer)), Qn;
  }
  function le(e, t, r) {
    if (r === undefined) {
      let a = zn.encode(e), l = t(a.length, 1) >>> 0;
      return Wn().subarray(l, l + a.length).set(a), Z = a.length, l;
    }
    let n = e.length, i = t(n, 1) >>> 0, o = Wn(), s = 0;
    for (;s < n; s++) {
      let a = e.charCodeAt(s);
      if (a > 127)
        break;
      o[i + s] = a;
    }
    if (s !== n) {
      s !== 0 && (e = e.slice(s)), i = r(i, n, n = s + e.length * 3, 1) >>> 0;
      let a = Wn().subarray(i + s, i + n), l = rm(e, a);
      s += l.written;
    }
    return Z = s, i;
  }
  function at(e) {
    return e == null;
  }
  function xe() {
    return (Gn === null || Gn.byteLength === 0) && (Gn = new Int32Array(b2.memory.buffer)), Gn;
  }
  function $r(e, t) {
    return e = e >>> 0, Cl.decode(Wn().subarray(e, e + t));
  }
  function w(e) {
    Nr === Ke.length && Ke.push(Ke.length + 1);
    let t = Nr;
    return Nr = Ke[t], Ke[t] = e, t;
  }
  function im(e) {
    e < 132 || (Ke[e] = Nr, Nr = e);
  }
  function ne(e) {
    let t = y(e);
    return im(e), t;
  }
  function om() {
    return (Jn === null || Jn.byteLength === 0) && (Jn = new Float64Array(b2.memory.buffer)), Jn;
  }
  function sm() {
    return (Hn === null || Hn.byteLength === 0) && (Hn = new BigInt64Array(b2.memory.buffer)), Hn;
  }
  function Ro(e) {
    let t = typeof e;
    if (t == "number" || t == "boolean" || e == null)
      return `${e}`;
    if (t == "string")
      return `"${e}"`;
    if (t == "symbol") {
      let i = e.description;
      return i == null ? "Symbol" : `Symbol(${i})`;
    }
    if (t == "function") {
      let i = e.name;
      return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
    }
    if (Array.isArray(e)) {
      let i = e.length, o = "[";
      i > 0 && (o += Ro(e[0]));
      for (let s = 1;s < i; s++)
        o += ", " + Ro(e[s]);
      return o += "]", o;
    }
    let r = /\[object ([^\]]+)\]/.exec(toString.call(e)), n;
    if (r.length > 1)
      n = r[1];
    else
      return toString.call(e);
    if (n == "Object")
      try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : n;
  }
  function am(e, t, r, n) {
    let i = { a: e, b: t, cnt: 1, dtor: r }, o = (...s) => {
      i.cnt++;
      let a = i.a;
      i.a = 0;
      try {
        return n(a, i.b, ...s);
      } finally {
        --i.cnt === 0 ? b2.__wbindgen_export_2.get(i.dtor)(a, i.b) : i.a = a;
      }
    };
    return o.original = i, o;
  }
  function lm(e, t, r) {
    b2.wasm_bindgen__convert__closures__invoke1_mut__hc386510de9598720(e, t, w(r));
  }
  function um() {
    let e = b2.getBuildTimeInfo();
    return ne(e);
  }
  function cm(e) {
    try {
      let o = b2.__wbindgen_add_to_stack_pointer(-16);
      var t = at(e) ? 0 : le(e, b2.__wbindgen_malloc, b2.__wbindgen_realloc), r = Z;
      b2.debug_panic(o, t, r);
      var n = xe()[o / 4 + 0], i = xe()[o / 4 + 1];
      if (i)
        throw ne(n);
    } finally {
      b2.__wbindgen_add_to_stack_pointer(16);
    }
  }
  function ue(e, t) {
    try {
      return e.apply(this, t);
    } catch (r) {
      b2.__wbindgen_exn_store(w(r));
    }
  }
  function pm(e, t, r, n) {
    b2.wasm_bindgen__convert__closures__invoke2_mut__h3c34ccf7f9375d77(e, t, w(r), w(n));
  }
  function dm(e, t) {
    let r = y(t), n = typeof r == "string" ? r : undefined;
    var i = at(n) ? 0 : le(n, b2.__wbindgen_malloc, b2.__wbindgen_realloc), o = Z;
    xe()[e / 4 + 1] = o, xe()[e / 4 + 0] = i;
  }
  function mm(e, t) {
    let r = new Error($r(e, t));
    return w(r);
  }
  function fm(e, t) {
    try {
      var r = { a: e, b: t }, n = (o, s) => {
        let a = r.a;
        r.a = 0;
        try {
          return pm(a, r.b, o, s);
        } finally {
          r.a = a;
        }
      };
      let i = new Promise(n);
      return w(i);
    } finally {
      r.a = r.b = 0;
    }
  }
  function gm(e, t) {
    return setTimeout(y(e), t >>> 0);
  }
  function ym(e, t) {
    let r = $r(e, t);
    return w(r);
  }
  function hm(e) {
    let t = y(e);
    return w(t);
  }
  function bm(e) {
    return y(e) === undefined;
  }
  function xm() {
    return ue(function(e, t) {
      return Reflect.has(y(e), y(t));
    }, arguments);
  }
  function wm() {
    return ue(function(e, t) {
      let r = JSON.parse($r(e, t));
      return w(r);
    }, arguments);
  }
  function Em() {
    return w(new Date);
  }
  function Pm(e) {
    return y(e).getTime();
  }
  function vm(e) {
    ne(e);
  }
  function Tm(e) {
    return y(e).now();
  }
  function _m() {
    return Date.now();
  }
  function Cm() {
    let e = performance;
    return at(e) ? 0 : w(e);
  }
  function Am(e) {
    let t = y(e);
    return typeof t == "object" && t !== null;
  }
  function Rm(e) {
    let t;
    try {
      t = y(e) instanceof Promise;
    } catch {
      t = false;
    }
    return t;
  }
  function Mm() {
    return w(Symbol.iterator);
  }
  function Sm(e) {
    return y(e).length;
  }
  function Im(e) {
    let t = y(e);
    return typeof t == "boolean" ? t ? 1 : 0 : 2;
  }
  function Dm(e) {
    return typeof y(e) == "bigint";
  }
  function km(e, t) {
    let r = y(t), n = typeof r == "number" ? r : undefined;
    om()[e / 8 + 1] = at(n) ? 0 : n, xe()[e / 4 + 0] = !at(n);
  }
  function Fm(e) {
    return w(e);
  }
  function Om(e, t) {
    return y(e) in y(t);
  }
  function Nm(e) {
    let t = BigInt.asUintN(64, e);
    return w(t);
  }
  function Lm(e, t) {
    return y(e) === y(t);
  }
  function $m(e) {
    return w(e);
  }
  function qm() {
    let e = new Array;
    return w(e);
  }
  function jm(e, t, r) {
    y(e)[t >>> 0] = ne(r);
  }
  function Bm() {
    return w(new Map);
  }
  function Vm() {
    let e = new Object;
    return w(e);
  }
  function Um(e) {
    return typeof y(e) == "string";
  }
  function Km(e, t, r) {
    y(e)[ne(t)] = ne(r);
  }
  function Qm(e, t, r) {
    let n = y(e).set(y(t), y(r));
    return w(n);
  }
  function Gm(e, t) {
    let r = y(e)[y(t)];
    return w(r);
  }
  function Jm(e, t) {
    return y(e).push(y(t));
  }
  function Hm() {
    return ue(function(e, t) {
      let r = y(e)[ne(t)];
      return w(r);
    }, arguments);
  }
  function Wm(e, t) {
    let r = String(y(t)), n = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), i = Z;
    xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
  }
  function zm() {
    let e = b2.memory;
    return w(e);
  }
  function Ym(e) {
    let t = y(e).buffer;
    return w(t);
  }
  function Zm(e, t, r) {
    let n = new Uint8Array(y(e), t >>> 0, r >>> 0);
    return w(n);
  }
  function Xm(e) {
    let t = new Uint8Array(y(e));
    return w(t);
  }
  function ef(e) {
    let t = Buffer.from(y(e));
    return w(t);
  }
  function tf() {
    return ue(function(e, t) {
      y(e).randomFillSync(ne(t));
    }, arguments);
  }
  function rf(e, t, r) {
    let n = y(e).subarray(t >>> 0, r >>> 0);
    return w(n);
  }
  function nf() {
    return ue(function(e, t) {
      y(e).getRandomValues(y(t));
    }, arguments);
  }
  function of(e) {
    let t = y(e).crypto;
    return w(t);
  }
  function sf(e) {
    let t = y(e).process;
    return w(t);
  }
  function af(e) {
    let t = y(e).versions;
    return w(t);
  }
  function lf(e) {
    let t = y(e).node;
    return w(t);
  }
  function uf() {
    return ue(function() {
      let e = module.require;
      return w(e);
    }, arguments);
  }
  function cf(e) {
    let t = y(e).msCrypto;
    return w(t);
  }
  function pf(e) {
    let t = new Uint8Array(e >>> 0);
    return w(t);
  }
  function df(e) {
    return typeof y(e) == "function";
  }
  function mf() {
    return ue(function(e, t) {
      let r = y(e).call(y(t));
      return w(r);
    }, arguments);
  }
  function ff(e, t) {
    let r = y(e)[t >>> 0];
    return w(r);
  }
  function gf(e) {
    return y(e).valueOf();
  }
  function yf() {
    return ue(function(e) {
      let t = y(e).next();
      return w(t);
    }, arguments);
  }
  function hf(e) {
    return y(e).done;
  }
  function bf(e) {
    let t = y(e).value;
    return w(t);
  }
  function xf(e) {
    let t = y(e).next;
    return w(t);
  }
  function wf() {
    return ue(function(e, t) {
      let r = Reflect.get(y(e), y(t));
      return w(r);
    }, arguments);
  }
  function Ef() {
    return ue(function() {
      let e = self.self;
      return w(e);
    }, arguments);
  }
  function Pf() {
    return ue(function() {
      let e = window.window;
      return w(e);
    }, arguments);
  }
  function vf() {
    return ue(function() {
      let e = globalThis.globalThis;
      return w(e);
    }, arguments);
  }
  function Tf() {
    return ue(function() {
      let e = global.global;
      return w(e);
    }, arguments);
  }
  function _f(e, t) {
    let r = new Function($r(e, t));
    return w(r);
  }
  function Cf(e) {
    return Array.isArray(y(e));
  }
  function Af() {
    return ue(function(e, t, r) {
      let n = y(e).call(y(t), y(r));
      return w(n);
    }, arguments);
  }
  function Rf(e) {
    return Number.isSafeInteger(y(e));
  }
  function Mf() {
    return ue(function(e, t, r) {
      return Reflect.set(y(e), y(t), y(r));
    }, arguments);
  }
  function Sf() {
    return ue(function(e) {
      let t = JSON.stringify(y(e));
      return w(t);
    }, arguments);
  }
  function If(e, t, r) {
    y(e).set(y(t), r >>> 0);
  }
  function Df(e) {
    return y(e).length;
  }
  function kf(e, t) {
    return y(e) == y(t);
  }
  function Ff(e) {
    let t;
    try {
      t = y(e) instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function Of(e) {
    let t;
    try {
      t = y(e) instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function Nf(e) {
    let t = Object.entries(y(e));
    return w(t);
  }
  function Lf(e, t) {
    let r = y(t), n = typeof r == "bigint" ? r : undefined;
    sm()[e / 8 + 1] = at(n) ? BigInt(0) : n, xe()[e / 4 + 0] = !at(n);
  }
  function $f(e, t) {
    let r = Ro(y(t)), n = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), i = Z;
    xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
  }
  function qf(e, t) {
    throw new Error($r(e, t));
  }
  function jf(e) {
    let t = ne(e).original;
    return t.cnt-- == 1 ? (t.a = 0, true) : false;
  }
  function Bf(e, t) {
    let r = y(e).then(y(t));
    return w(r);
  }
  function Vf(e, t, r) {
    let n = y(e).then(y(t), y(r));
    return w(n);
  }
  function Uf(e) {
    let t = Promise.resolve(y(e));
    return w(t);
  }
  function Kf(e, t, r) {
    let n = am(e, t, 332, lm);
    return w(n);
  }
  function Gf(e) {
    return e.item_type === "query" && "query" in e;
  }
  function Jf(e) {
    return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
  }
  function Hf(e) {
    return typeof e == "object" && e !== null && e.error_code !== undefined;
  }
  function Sl(e, t) {
    let r;
    try {
      r = Un({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
    } catch {
    }
    e.noEngine !== true && r?.startsWith("prisma://") && ar("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
    let n = nr(t.generator), i = !!(r?.startsWith("prisma://") || e.noEngine), o = !!t.adapter, s = n === "library", a = n === "binary";
    if (i && o || o && false) {
      let l;
      throw e.noEngine ? l = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."] : r?.startsWith("prisma://") ? l = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : l = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."], new te(l.join(`
`), { clientVersion: t.clientVersion });
    }
    if (i)
      return new Or(t);
    if (s)
      return new qr(t);
    throw new te("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
  }
  function Yn({ generator: e }) {
    return e?.previewFeatures ?? [];
  }
  function Fl(e, t) {
    let r = Ol(e), n = Wf(r), i = Yf(n);
    i ? Zn(i, t) : t.addErrorMessage(() => "Unknown error");
  }
  function Ol(e) {
    return e.errors.flatMap((t) => t.kind === "Union" ? Ol(t) : [t]);
  }
  function Wf(e) {
    let t = new Map, r = [];
    for (let n of e) {
      if (n.kind !== "InvalidArgumentType") {
        r.push(n);
        continue;
      }
      let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
      o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: zf(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
    }
    return r.push(...t.values()), r;
  }
  function zf(e, t) {
    return [...new Set(e.concat(t))];
  }
  function Yf(e) {
    return Gi(e, (t, r) => {
      let n = Dl(t), i = Dl(r);
      return n !== i ? n - i : kl(t) - kl(r);
    });
  }
  function Dl(e) {
    let t = 0;
    return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
  }
  function kl(e) {
    switch (e.kind) {
      case "InvalidArgumentValue":
      case "ValueTooLarge":
        return 20;
      case "InvalidArgumentType":
        return 10;
      case "RequiredArgumentMissing":
        return -10;
      default:
        return 0;
    }
  }
  function Zn(e, t) {
    switch (e.kind) {
      case "IncludeAndSelect":
        Zf(e, t);
        break;
      case "IncludeOnScalar":
        Xf(e, t);
        break;
      case "EmptySelection":
        eg(e, t);
        break;
      case "UnknownSelectionField":
        tg(e, t);
        break;
      case "UnknownArgument":
        rg(e, t);
        break;
      case "UnknownInputField":
        ng(e, t);
        break;
      case "RequiredArgumentMissing":
        ig(e, t);
        break;
      case "InvalidArgumentType":
        og(e, t);
        break;
      case "InvalidArgumentValue":
        sg(e, t);
        break;
      case "ValueTooLarge":
        ag(e, t);
        break;
      case "SomeFieldsMissing":
        lg(e, t);
        break;
      case "TooManyFieldsGiven":
        ug(e, t);
        break;
      case "Union":
        Fl(e, t);
        break;
      default:
        throw new Error("not implemented: " + e.kind);
    }
  }
  function Zf(e, t) {
    let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    r && r instanceof z && (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
  }
  function Xf(e, t) {
    let [r, n] = ei(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
    if (o && (o.getField(n)?.markAsError(), i))
      for (let s of i.fields)
        s.isRelation && o.addSuggestion(new Qe(s.name, "true"));
    t.addErrorMessage((s) => {
      let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
      return i ? a += ` on model ${s.bold(i.name)}. ${jr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
    });
  }
  function eg(e, t) {
    let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
    n && (n.removeAllFields(), ql(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${jr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
  }
  function tg(e, t) {
    let [r, n] = ei(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
    i && (i.value.getField(n)?.markAsError(), ql(i.value, e.outputType)), t.addErrorMessage((o) => {
      let s = [`Unknown field ${o.red(`\`${n}\``)}`];
      return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(jr(o)), s.join(" ");
    });
  }
  function rg(e, t) {
    let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof z && (n.getField(r)?.markAsError(), cg(n, e.arguments)), t.addErrorMessage((i) => Ll(i, r, e.arguments.map((o) => o.name)));
  }
  function ng(e, t) {
    let [r, n] = ei(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (i instanceof z) {
      i.getDeepField(e.argumentPath)?.markAsError();
      let o = i.getDeepFieldValue(r);
      o instanceof z && jl(o, e.inputType);
    }
    t.addErrorMessage((o) => Ll(o, n, e.inputType.fields.map((s) => s.name)));
  }
  function Ll(e, t, r) {
    let n = [`Unknown argument \`${e.red(t)}\`.`], i = dg(t, r);
    return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(jr(e)), n.join(" ");
  }
  function ig(e, t) {
    let r;
    t.addErrorMessage((l) => r?.value instanceof Y && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
    let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (!(n instanceof z))
      return;
    let [i, o] = ei(e.argumentPath), s = new Xn, a = n.getDeepFieldValue(i);
    if (a instanceof z)
      if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields)
          s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new Qe(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map($l).join(" | ");
        a.addSuggestion(new Qe(o, l).makeRequired());
      }
  }
  function $l(e) {
    return e.kind === "list" ? `${$l(e.elementType)}[]` : e.name;
  }
  function og(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof z && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = ti("or", e.argument.typeNames.map((s) => i.green(s)));
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
  }
  function sg(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    n instanceof z && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
        let s = ti("or", e.argument.typeNames.map((a) => i.green(a)));
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
  }
  function ag(e, t) {
    let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
    if (n instanceof z) {
      let s = n.getDeepField(e.argumentPath)?.value;
      s?.markAsError(), s instanceof Y && (i = s.text);
    }
    t.addErrorMessage((o) => {
      let s = ["Unable to fit value"];
      return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
    });
  }
  function lg(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
    if (n instanceof z) {
      let i = n.getDeepFieldValue(e.argumentPath);
      i instanceof z && jl(i, e.inputType);
    }
    t.addErrorMessage((i) => {
      let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${ti("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(jr(i)), o.join(" ");
    });
  }
  function ug(e, t) {
    let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
    if (n instanceof z) {
      let o = n.getDeepFieldValue(e.argumentPath);
      o instanceof z && (o.markAsError(), i = Object.keys(o.getFields()));
    }
    t.addErrorMessage((o) => {
      let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
      return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${ti("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
    });
  }
  function ql(e, t) {
    for (let r of t.fields)
      e.hasField(r.name) || e.addSuggestion(new Qe(r.name, "true"));
  }
  function cg(e, t) {
    for (let r of t)
      e.hasField(r.name) || e.addSuggestion(new Qe(r.name, r.typeNames.join(" | ")));
  }
  function jl(e, t) {
    if (t.kind === "object")
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Qe(r.name, r.typeNames.join(" | ")));
  }
  function ei(e) {
    let t = [...e], r = t.pop();
    if (!r)
      throw new Error("unexpected empty path");
    return [t, r];
  }
  function jr({ green: e, enabled: t }) {
    return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
  }
  function ti(e, t) {
    if (t.length === 1)
      return t[0];
    let r = [...t], n = r.pop();
    return `${r.join(", ")} ${e} ${n}`;
  }
  function dg(e, t) {
    let r = 1 / 0, n;
    for (let i of t) {
      let o = (0, Nl.default)(e, i);
      o > pg || o < r && (r = o, n = i);
    }
    return n;
  }
  function ri({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
    let s = Sn(e);
    for (let p of t)
      Zn(p, s);
    let a = r === "pretty" ? ba : Rn, l = s.renderAllMessages(a), u = new Ot(0, { colors: a }).write(s).toString(), c = Kt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
    throw new te(c, { clientVersion: o });
  }
  function Bl({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
    let u = new ko({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
    return { modelName: e, action: mg[t], query: Fo(r, u) };
  }
  function Fo({ select: e, include: t, ...r } = {}, n) {
    return { arguments: Ul(r, n), selection: fg(e, t, n) };
  }
  function fg(e, t, r) {
    return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? hg(e, r) : gg(r, t);
  }
  function gg(e, t) {
    let r = {};
    return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && yg(r, t, e), r;
  }
  function yg(e, t, r) {
    for (let [n, i] of Object.entries(t)) {
      let o = r.findField(n);
      o && o?.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Fo(i, r.nestSelection(n)));
    }
  }
  function hg(e, t) {
    let r = {}, n = t.getComputedFields(), i = Xa(e, n);
    for (let [o, s] of Object.entries(i)) {
      let a = t.findField(o);
      n?.[o] && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = Fo(s, t.nestSelection(o))));
    }
    return r;
  }
  function Vl(e, t) {
    if (e === null)
      return null;
    if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
      return e;
    if (typeof e == "bigint")
      return { $type: "BigInt", value: String(e) };
    if (Nt(e)) {
      if (bn(e))
        return { $type: "DateTime", value: e.toISOString() };
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
    }
    if (jt(e))
      return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
    if (Array.isArray(e))
      return bg(e, t);
    if (ArrayBuffer.isView(e))
      return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
    if (xg(e))
      return e.values;
    if (qt(e))
      return { $type: "Decimal", value: e.toFixed() };
    if (e instanceof De) {
      if (e !== gn.instances[e._getName()])
        throw new Error("Invalid ObjectEnumValue");
      return { $type: "Enum", value: e._getName() };
    }
    if (wg(e))
      return e.toJSON();
    if (typeof e == "object")
      return Ul(e, t);
    t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
  }
  function Ul(e, t) {
    if (e.$type)
      return { $type: "Raw", value: e };
    let r = {};
    for (let n in e) {
      let i = e[n];
      i !== undefined && (r[n] = Vl(i, t.nestArgument(n)));
    }
    return r;
  }
  function bg(e, t) {
    let r = [];
    for (let n = 0;n < e.length; n++) {
      let i = t.nestArgument(String(n)), o = e[n];
      o === undefined && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Vl(o, i));
    }
    return r;
  }
  function xg(e) {
    return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
  }
  function wg(e) {
    return typeof e == "object" && e !== null && typeof e.toJSON == "function";
  }
  function Br(e) {
    try {
      return Gl(e, "fast");
    } catch {
      return Gl(e, "slow");
    }
  }
  function Gl(e, t) {
    return JSON.stringify(e.map((r) => Eg(r, t)));
  }
  function Eg(e, t) {
    return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Nt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Ne.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Pg(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Hl(e) : e;
  }
  function Pg(e) {
    return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
  }
  function Hl(e) {
    if (typeof e != "object" || e === null)
      return e;
    if (typeof e.toJSON == "function")
      return e.toJSON();
    if (Array.isArray(e))
      return e.map(Jl);
    let t = {};
    for (let r of Object.keys(e))
      t[r] = Jl(e[r]);
    return t;
  }
  function Jl(e) {
    return typeof e == "bigint" ? e.toString() : Hl(e);
  }
  function Oo(e, t, r, n) {
    if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && vg.exec(t))
      throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
  function Lo(e) {
    return function(r) {
      let n, i = (o = e) => {
        try {
          return o === undefined || o?.kind === "itx" ? n ?? (n = Zl(r(o))) : Zl(r(o));
        } catch (s) {
          return Promise.reject(s);
        }
      };
      return { then(o, s) {
        return i().then(o, s);
      }, catch(o) {
        return i().catch(o);
      }, finally(o) {
        return i().finally(o);
      }, requestTransaction(o) {
        let s = i(o);
        return s.requestTransaction ? s.requestTransaction(o) : s;
      }, [Symbol.toStringTag]: "PrismaPromise" };
    };
  }
  function Zl(e) {
    return typeof e.then == "function" ? e : Promise.resolve(e);
  }
  function eu(e) {
    return e.includes("tracing") ? new $o : Xl;
  }
  function tu(e, t = () => {
  }) {
    let r, n = new Promise((i) => r = i);
    return { then(i) {
      return --e === 0 && r(t()), i?.(n);
    } };
  }
  function ru(e) {
    return typeof e == "string" ? e : e.reduce((t, r) => {
      let n = typeof r == "string" ? r : r.level;
      return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
    }, undefined);
  }
  function ii(e) {
    return typeof e.batchRequestIdx == "number";
  }
  function oi(e) {
    return e === null ? e : Array.isArray(e) ? e.map(oi) : typeof e == "object" ? Tg(e) ? _g(e) : kt(e, oi) : e;
  }
  function Tg(e) {
    return e !== null && typeof e == "object" && typeof e.$type == "string";
  }
  function _g({ $type: e, value: t }) {
    switch (e) {
      case "BigInt":
        return BigInt(t);
      case "Bytes":
        return Buffer.from(t, "base64");
      case "DateTime":
        return new Date(t);
      case "Decimal":
        return new Ne(t);
      case "Json":
        return JSON.parse(t);
      default:
        gt(t, "Unknown tagged value");
    }
  }
  function nu(e) {
    if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
      return;
    let t = [];
    return e.modelName && t.push(e.modelName), e.query.arguments && t.push(qo(e.query.arguments)), t.push(qo(e.query.selection)), t.join("");
  }
  function qo(e) {
    return `(${Object.keys(e).sort().map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${qo(n)})` : r;
    }).join(" ")})`;
  }
  function jo(e) {
    return Cg[e];
  }
  function Rg(e) {
    if (e) {
      if (e.kind === "batch")
        return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
      if (e.kind === "itx")
        return { kind: "itx", options: ou(e) };
      gt(e, "Unknown transaction kind");
    }
  }
  function ou(e) {
    return { id: e.id, payload: e.payload };
  }
  function Mg(e, t) {
    return ii(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
  }
  function Sg(e) {
    return e.code === "P2009" || e.code === "P2012";
  }
  function su(e) {
    if (e.kind === "Union")
      return { kind: "Union", errors: e.errors.map(su) };
    if (Array.isArray(e.selectionPath)) {
      let [, ...t] = e.selectionPath;
      return { ...e, selectionPath: t };
    }
    return e;
  }
  function uu(e) {
    return e.map((t) => {
      let r = {};
      for (let n of Object.keys(t))
        r[n] = cu(t[n]);
      return r;
    });
  }
  function cu({ prisma__type: e, prisma__value: t }) {
    switch (e) {
      case "bigint":
        return BigInt(t);
      case "bytes":
        return Buffer.from(t, "base64");
      case "decimal":
        return new Ne(t);
      case "datetime":
      case "date":
        return new Date(t);
      case "time":
        return new Date(`1970-01-01T${t}Z`);
      case "array":
        return t.map(cu);
      default:
        return t;
    }
  }
  function gu(e, t) {
    for (let [r, n] of Object.entries(e)) {
      if (!pu.includes(r)) {
        let i = Wt(r, pu);
        throw new U(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
      }
      Dg[r](n, t);
    }
    if (e.datasourceUrl && e.datasources)
      throw new U('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
  }
  function Wt(e, t) {
    if (t.length === 0 || typeof e != "string")
      return "";
    let r = kg(e, t);
    return r ? ` Did you mean "${r}"?` : "";
  }
  function kg(e, t) {
    if (t.length === 0)
      return null;
    let r = t.map((i) => ({ value: i, distance: (0, fu.default)(e, i) }));
    r.sort((i, o) => i.distance < o.distance ? -1 : 1);
    let n = r[0];
    return n.distance < 3 ? n.value : null;
  }
  function yu(e) {
    return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
      let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
        o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
      }, l = (u) => {
        o || (o = true, r(u));
      };
      for (let u = 0;u < e.length; u++)
        e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!ii(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
    });
  }
  function Eu(e) {

    class t {
      constructor(n) {
        this._middlewares = new ni;
        this._createPrismaPromise = Lo();
        this.$extends = ja;
        e = { ...e, ...n?.__internal?.configOverride }, rl(e), n && gu(n, e);
        let i = n?.adapter ? Zi(n.adapter) : undefined, o = new xu.EventEmitter().on("error", () => {
        });
        this._extensions = Ln.empty(), this._previewFeatures = Yn(e), this._clientVersion = e.clientVersion ?? lu, this._activeProvider = e.activeProvider, this._tracingHelper = eu(this._previewFeatures);
        let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Vr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Vr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && rr(s, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
        try {
          let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
          c && $.enable("prisma:client");
          let p = Vr.default.resolve(e.dirname, e.relativePath);
          wu.default.existsSync(p) || (p = e.dirname), lt("dirname", e.dirname), lt("relativePath", e.relativePath), lt("cwd", p);
          let d = u.engine || {};
          if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Vr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? undefined, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && ru(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], getQueryEngineWasmModule: e.getQueryEngineWasmModule, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: nl(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: o, isBundled: e.isBundled, adapter: i }, lt("clientVersion", e.clientVersion), this._engine = Sl(e, this._engineConfig), this._requestHandler = new ai(this, o), l.log)
            for (let f of l.log) {
              let h = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              h && this.$on(h, (g) => {
                sr.log(`${sr.tags[h] ?? ""}`, g.message || g.query);
              });
            }
          this._metrics = new Ft(this._engine);
        } catch (l) {
          throw l.clientVersion = this._clientVersion, l;
        }
        return this._appliedParent = xr(this);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClient";
      }
      $use(n) {
        this._middlewares.use(n);
      }
      $on(n, i) {
        n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
      }
      $connect() {
        try {
          return this._engine.start();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        }
      }
      async $disconnect() {
        try {
          await this._engine.stop();
        } catch (n) {
          throw n.clientVersion = this._clientVersion, n;
        } finally {
          as();
        }
      }
      $executeRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: No({ clientMethod: i, activeProvider: a }), callsite: it(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
      }
      $executeRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined) {
            let [s, a] = hu(n, i);
            return Oo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
          }
          throw new te("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
        });
      }
      $executeRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => (Oo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
      }
      $runCommandRaw(n) {
        if (e.activeProvider !== "mongodb")
          throw new te(`The ${e.activeProvider} provider does not support \$runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
        return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Kl, callsite: it(this._errorFormat), transaction: i }));
      }
      async $queryRawInternal(n, i, o, s) {
        let a = this._activeProvider;
        return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: No({ clientMethod: i, activeProvider: a }), callsite: it(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(uu);
      }
      $queryRaw(n, ...i) {
        return this._createPrismaPromise((o) => {
          if (n.raw !== undefined || n.sql !== undefined)
            return this.$queryRawInternal(o, "$queryRaw", ...hu(n, i));
          throw new te("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
        });
      }
      $queryRawUnsafe(n, ...i) {
        return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
      }
      _transactionWithArray({ promises: n, options: i }) {
        let o = Ng.nextId(), s = tu(n.length), a = n.map((l, u) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
          let c = i?.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
          return l.requestTransaction?.(p) ?? l;
        });
        return yu(a);
      }
      async _transactionWithCallback({ callback: n, options: i }) {
        let o = { traceparent: this._tracingHelper.getTraceParent() }, s = await this._engine.transaction("start", o, i), a;
        try {
          let l = { kind: "itx", ...s };
          a = await n(this._createItxClient(l)), await this._engine.transaction("commit", o, s);
        } catch (l) {
          throw await this._engine.transaction("rollback", o, s).catch(() => {
          }), l;
        }
        return a;
      }
      _createItxClient(n) {
        return xr(Fe(Fn(this), [pe("_appliedParent", () => this._appliedParent._createItxClient(n)), pe("_createPrismaPromise", () => Lo(n)), pe(Og, () => n.id), gr(Hi)]));
      }
      $transaction(n, i) {
        let o;
        typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
        let s = { name: "transaction", attributes: { method: "$transaction" } };
        return this._tracingHelper.runInChildSpan(s, o);
      }
      _request(n) {
        n.otelParentCtx = this._tracingHelper.getActiveContext();
        let i = n.middlewareArgsMapper ?? Fg, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
          let c = this._middlewares.get(++a);
          if (c)
            return this._tracingHelper.runInChildSpan(s.middleware, (_) => c(u, (A) => (_?.end(), l(A))));
          let { runInTransaction: p, args: d, ...f } = u, h = { ...n, ...f };
          d && (h.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== undefined && p === false && delete h.transaction;
          let g = await Ja(this, h);
          return h.model ? Ua({ result: g, modelName: h.model, args: h.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g;
        };
        return this._tracingHelper.runInChildSpan(s.operation, () => new bu.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
      }
      async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
        try {
          n = u ? u(n) : n;
          let h = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(h, () => Bl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
          return $.enabled("prisma:client") && (lt("Prisma Client call:"), lt(`prisma.${i}(${Pa(n)})`), lt("Generated request:"), lt(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
        } catch (h) {
          throw h.clientVersion = this._clientVersion, h;
        }
      }
      get $metrics() {
        if (!this._hasPreviewFlag("metrics"))
          throw new te("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
        return this._metrics;
      }
      _hasPreviewFlag(n) {
        return !!this._engineConfig.previewFeatures?.includes(n);
      }
    }
    return t;
  }
  function hu(e, t) {
    return Lg(e) ? [new fe(e, t), zl] : [e, Yl];
  }
  function Lg(e) {
    return Array.isArray(e) && Array.isArray(e.raw);
  }
  function Pu(e) {
    return new Proxy(e, { get(t, r) {
      if (r in t)
        return t[r];
      if (!$g.has(r))
        throw new TypeError(`Invalid enum value: ${String(r)}`);
    } });
  }
  function vu(e) {
    rr(e, { conflictCheck: "warn" });
  }
  var __dirname = "/home/pitpy/Desktop/trainning/hono-bun-app/node_modules/@prisma/client/runtime", __filename = "/home/pitpy/Desktop/trainning/hono-bun-app/node_modules/@prisma/client/runtime/library.js";
  var Tu = Object.create;
  var Kr = Object.defineProperty;
  var _u = Object.getOwnPropertyDescriptor;
  var Cu = Object.getOwnPropertyNames;
  var Au = Object.getPrototypeOf;
  var Ru = Object.prototype.hasOwnProperty;
  var Q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var Tt = (e, t) => {
    for (var r in t)
      Kr(e, r, { get: t[r], enumerable: true });
  };
  var Bo = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let i of Cu(t))
        !Ru.call(e, i) && i !== r && Kr(e, i, { get: () => t[i], enumerable: !(n = _u(t, i)) || n.enumerable });
    return e;
  };
  var D = (e, t, r) => (r = e != null ? Tu(Au(e)) : {}, Bo(t || !e || !e.__esModule ? Kr(r, "default", { value: e, enumerable: true }) : r, e));
  var Mu = (e) => Bo(Kr({}, "__esModule", { value: true }), e);
  var Yo = Q((Yg, zo) => {
    var _t = 1000, Ct = _t * 60, At = Ct * 60, ct = At * 24, Su = ct * 7, Iu = ct * 365.25;
    zo.exports = function(e, t) {
      t = t || {};
      var r = typeof e;
      if (r === "string" && e.length > 0)
        return Du(e);
      if (r === "number" && isFinite(e))
        return t.long ? Fu(e) : ku(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
    function Du(e) {
      if (e = String(e), !(e.length > 100)) {
        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (t) {
          var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
          switch (n) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return r * Iu;
            case "weeks":
            case "week":
            case "w":
              return r * Su;
            case "days":
            case "day":
            case "d":
              return r * ct;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return r * At;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return r * Ct;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return r * _t;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return r;
            default:
              return;
          }
        }
      }
    }
    function ku(e) {
      var t = Math.abs(e);
      return t >= ct ? Math.round(e / ct) + "d" : t >= At ? Math.round(e / At) + "h" : t >= Ct ? Math.round(e / Ct) + "m" : t >= _t ? Math.round(e / _t) + "s" : e + "ms";
    }
    function Fu(e) {
      var t = Math.abs(e);
      return t >= ct ? Gr(e, t, ct, "day") : t >= At ? Gr(e, t, At, "hour") : t >= Ct ? Gr(e, t, Ct, "minute") : t >= _t ? Gr(e, t, _t, "second") : e + " ms";
    }
    function Gr(e, t, r, n) {
      var i = t >= r * 1.5;
      return Math.round(e / r) + " " + n + (i ? "s" : "");
    }
  });
  var mi = Q((Zg, Zo) => {
    function Ou(e) {
      r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = Yo(), r.destroy = u, Object.keys(e).forEach((c) => {
        r[c] = e[c];
      }), r.names = [], r.skips = [], r.formatters = {};
      function t(c) {
        let p = 0;
        for (let d = 0;d < c.length; d++)
          p = (p << 5) - p + c.charCodeAt(d), p |= 0;
        return r.colors[Math.abs(p) % r.colors.length];
      }
      r.selectColor = t;
      function r(c) {
        let p, d = null, f, h;
        function g(..._) {
          if (!g.enabled)
            return;
          let A = g, R = Number(new Date), E = R - (p || R);
          A.diff = E, A.prev = p, A.curr = R, p = R, _[0] = r.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
          let S = 0;
          _[0] = _[0].replace(/%([a-zA-Z%])/g, (X, ut) => {
            if (X === "%%")
              return "%";
            S++;
            let K = r.formatters[ut];
            if (typeof K == "function") {
              let ie = _[S];
              X = K.call(A, ie), _.splice(S, 1), S--;
            }
            return X;
          }), r.formatArgs.call(A, _), (A.log || r.log).apply(A, _);
        }
        return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (f !== r.namespaces && (f = r.namespaces, h = r.enabled(c)), h), set: (_) => {
          d = _;
        } }), typeof r.init == "function" && r.init(g), g;
      }
      function n(c, p) {
        let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
        return d.log = this.log, d;
      }
      function i(c) {
        r.save(c), r.namespaces = c, r.names = [], r.skips = [];
        let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), f = d.length;
        for (p = 0;p < f; p++)
          d[p] && (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
      }
      function o() {
        let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
        return r.enable(""), c;
      }
      function s(c) {
        if (c[c.length - 1] === "*")
          return true;
        let p, d;
        for (p = 0, d = r.skips.length;p < d; p++)
          if (r.skips[p].test(c))
            return false;
        for (p = 0, d = r.names.length;p < d; p++)
          if (r.names[p].test(c))
            return true;
        return false;
      }
      function a(c) {
        return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function l(c) {
        return c instanceof Error ? c.stack || c.message : c;
      }
      function u() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      return r.enable(r.load()), r;
    }
    Zo.exports = Ou;
  });
  var Xo = Q((he, Jr) => {
    he.formatArgs = Lu;
    he.save = $u;
    he.load = qu;
    he.useColors = Nu;
    he.storage = ju();
    he.destroy = (() => {
      let e = false;
      return () => {
        e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })();
    he.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function Nu() {
      return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function Lu(e) {
      if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Jr.exports.humanize(this.diff), !this.useColors)
        return;
      let t = "color: " + this.color;
      e.splice(1, 0, t, "color: inherit");
      let r = 0, n = 0;
      e[0].replace(/%[a-zA-Z%]/g, (i) => {
        i !== "%%" && (r++, i === "%c" && (n = r));
      }), e.splice(n, 0, t);
    }
    he.log = console.debug || console.log || (() => {
    });
    function $u(e) {
      try {
        e ? he.storage.setItem("debug", e) : he.storage.removeItem("debug");
      } catch {
      }
    }
    function qu() {
      let e;
      try {
        e = he.storage.getItem("debug");
      } catch {
      }
      return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
    }
    function ju() {
      try {
        return localStorage;
      } catch {
      }
    }
    Jr.exports = mi()(he);
    var { formatters: Bu } = Jr.exports;
    Bu.j = function(e) {
      try {
        return JSON.stringify(e);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    };
  });
  var fi = Q((Xg, es) => {
    es.exports = (e, t = process.argv) => {
      let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
      return n !== -1 && (i === -1 || n < i);
    };
  });
  var hi = Q((ey, rs) => {
    var Vu = import.meta.require("os"), ts = import.meta.require("tty"), Pe = fi(), { env: J } = process, Je;
    Pe("no-color") || Pe("no-colors") || Pe("color=false") || Pe("color=never") ? Je = 0 : (Pe("color") || Pe("colors") || Pe("color=true") || Pe("color=always")) && (Je = 1);
    "FORCE_COLOR" in J && (J.FORCE_COLOR === "true" ? Je = 1 : J.FORCE_COLOR === "false" ? Je = 0 : Je = J.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(J.FORCE_COLOR, 10), 3));
    function gi(e) {
      return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
    }
    function yi(e, t) {
      if (Je === 0)
        return 0;
      if (Pe("color=16m") || Pe("color=full") || Pe("color=truecolor"))
        return 3;
      if (Pe("color=256"))
        return 2;
      if (e && !t && Je === undefined)
        return 0;
      let r = Je || 0;
      if (J.TERM === "dumb")
        return r;
      if (process.platform === "win32") {
        let n = Vu.release().split(".");
        return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in J)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => (n in J)) || J.CI_NAME === "codeship" ? 1 : r;
      if ("TEAMCITY_VERSION" in J)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(J.TEAMCITY_VERSION) ? 1 : 0;
      if (J.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in J) {
        let n = parseInt((J.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (J.TERM_PROGRAM) {
          case "iTerm.app":
            return n >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(J.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(J.TERM) || ("COLORTERM" in J) ? 1 : r;
    }
    function Uu(e) {
      let t = yi(e, e && e.isTTY);
      return gi(t);
    }
    rs.exports = { supportsColor: Uu, stdout: gi(yi(true, ts.isatty(1))), stderr: gi(yi(true, ts.isatty(2))) };
  });
  var is = Q((ee, Wr) => {
    var Ku = import.meta.require("tty"), Hr = import.meta.require("util");
    ee.init = Yu;
    ee.log = Hu;
    ee.formatArgs = Gu;
    ee.save = Wu;
    ee.load = zu;
    ee.useColors = Qu;
    ee.destroy = Hr.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    ee.colors = [6, 2, 3, 4, 5, 1];
    try {
      let e = hi();
      e && (e.stderr || e).level >= 2 && (ee.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
    } catch {
    }
    ee.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
      let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
      return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
    }, {});
    function Qu() {
      return "colors" in ee.inspectOpts ? !!ee.inspectOpts.colors : Ku.isatty(process.stderr.fd);
    }
    function Gu(e) {
      let { namespace: t, useColors: r } = this;
      if (r) {
        let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
        e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + Wr.exports.humanize(this.diff) + "\x1B[0m");
      } else
        e[0] = Ju() + t + " " + e[0];
    }
    function Ju() {
      return ee.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
    }
    function Hu(...e) {
      return process.stderr.write(Hr.format(...e) + `
`);
    }
    function Wu(e) {
      e ? process.env.DEBUG = e : delete process.env.DEBUG;
    }
    function zu() {
      return process.env.DEBUG;
    }
    function Yu(e) {
      e.inspectOpts = {};
      let t = Object.keys(ee.inspectOpts);
      for (let r = 0;r < t.length; r++)
        e.inspectOpts[t[r]] = ee.inspectOpts[t[r]];
    }
    Wr.exports = mi()(ee);
    var { formatters: ns } = Wr.exports;
    ns.o = function(e) {
      return this.inspectOpts.colors = this.useColors, Hr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
    };
    ns.O = function(e) {
      return this.inspectOpts.colors = this.useColors, Hr.inspect(e, this.inspectOpts);
    };
  });
  var os2 = Q((ty, bi) => {
    typeof process > "u" || process.type === "renderer" || false || process.__nwjs ? bi.exports = Xo() : bi.exports = is();
  });
  var gs = Q((Ly, Ci) => {
    var M = Ci.exports;
    Ci.exports.default = M;
    var F = "\x1B[", Zt = "\x1B]", St = "\x07", rn = ";", fs2 = false;
    M.cursorTo = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      return typeof t != "number" ? F + (e + 1) + "G" : F + (t + 1) + ";" + (e + 1) + "H";
    };
    M.cursorMove = (e, t) => {
      if (typeof e != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return e < 0 ? r += F + -e + "D" : e > 0 && (r += F + e + "C"), t < 0 ? r += F + -t + "A" : t > 0 && (r += F + t + "B"), r;
    };
    M.cursorUp = (e = 1) => F + e + "A";
    M.cursorDown = (e = 1) => F + e + "B";
    M.cursorForward = (e = 1) => F + e + "C";
    M.cursorBackward = (e = 1) => F + e + "D";
    M.cursorLeft = F + "G";
    M.cursorSavePosition = fs2 ? "\x1B7" : F + "s";
    M.cursorRestorePosition = fs2 ? "\x1B8" : F + "u";
    M.cursorGetPosition = F + "6n";
    M.cursorNextLine = F + "E";
    M.cursorPrevLine = F + "F";
    M.cursorHide = F + "?25l";
    M.cursorShow = F + "?25h";
    M.eraseLines = (e) => {
      let t = "";
      for (let r = 0;r < e; r++)
        t += M.eraseLine + (r < e - 1 ? M.cursorUp() : "");
      return e && (t += M.cursorLeft), t;
    };
    M.eraseEndLine = F + "K";
    M.eraseStartLine = F + "1K";
    M.eraseLine = F + "2K";
    M.eraseDown = F + "J";
    M.eraseUp = F + "1J";
    M.eraseScreen = F + "2J";
    M.scrollUp = F + "S";
    M.scrollDown = F + "T";
    M.clearScreen = "\x1Bc";
    M.clearTerminal = process.platform === "win32" ? `${M.eraseScreen}${F}0f` : `${M.eraseScreen}${F}3J${F}H`;
    M.beep = St;
    M.link = (e, t) => [Zt, "8", rn, rn, t, St, e, Zt, "8", rn, rn, St].join("");
    M.image = (e, t = {}) => {
      let r = `${Zt}1337;File=inline=1`;
      return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + St;
    };
    M.iTerm = { setCwd: (e = process.cwd()) => `${Zt}50;CurrentDir=${e}${St}`, annotation: (e, t = {}) => {
      let r = `${Zt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
      if ((n || i) && !(n && i && typeof t.length < "u"))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + St;
    } };
  });
  var bs = Q(($y, hs) => {
    var ic = hi(), It = fi();
    function ys(e) {
      if (/^\d{3,4}$/.test(e)) {
        let r = /(\d{1,2})(\d{2})/.exec(e);
        return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
      }
      let t = (e || "").split(".").map((r) => parseInt(r, 10));
      return { major: t[0], minor: t[1], patch: t[2] };
    }
    function Ai(e) {
      let { env: t } = process;
      if ("FORCE_HYPERLINK" in t)
        return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
      if (It("no-hyperlink") || It("no-hyperlinks") || It("hyperlink=false") || It("hyperlink=never"))
        return false;
      if (It("hyperlink=true") || It("hyperlink=always") || "NETLIFY" in t)
        return true;
      if (!ic.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
        return false;
      if ("TERM_PROGRAM" in t) {
        let r = ys(t.TERM_PROGRAM_VERSION);
        switch (t.TERM_PROGRAM) {
          case "iTerm.app":
            return r.major === 3 ? r.minor >= 1 : r.major > 3;
          case "WezTerm":
            return r.major >= 20200620;
          case "vscode":
            return r.major > 1 || r.major === 1 && r.minor >= 72;
        }
      }
      if ("VTE_VERSION" in t) {
        if (t.VTE_VERSION === "0.50.0")
          return false;
        let r = ys(t.VTE_VERSION);
        return r.major > 0 || r.minor >= 50;
      }
      return false;
    }
    hs.exports = { supportsHyperlink: Ai, stdout: Ai(process.stdout), stderr: Ai(process.stderr) };
  });
  var ws = Q((qy, Xt) => {
    var oc = gs(), Ri = bs(), xs = (e, t, { target: r = "stdout", ...n } = {}) => Ri[r] ? oc.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
    Xt.exports = (e, t, r = {}) => xs(e, t, r);
    Xt.exports.stderr = (e, t, r = {}) => xs(e, t, { target: "stderr", ...r });
    Xt.exports.isSupported = Ri.stdout;
    Xt.exports.stderr.isSupported = Ri.stderr;
  });
  var Ss = Q((rh, wc) => {
    wc.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
  });
  var Ds = Q((nh, ln) => {
    var Ec = import.meta.require("fs"), Is = import.meta.require("path"), Pc = import.meta.require("os"), vc = Ss(), Tc = vc.version, _c = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
    function Cc(e) {
      let t = {}, r = e.toString();
      r = r.replace(/\r\n?/mg, `
`);
      let n;
      for (;(n = _c.exec(r)) != null; ) {
        let i = n[1], o = n[2] || "";
        o = o.trim();
        let s = o[0];
        o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
      }
      return t;
    }
    function Ii(e) {
      console.log(`[dotenv@${Tc}][DEBUG] ${e}`);
    }
    function Ac(e) {
      return e[0] === "~" ? Is.join(Pc.homedir(), e.slice(1)) : e;
    }
    function Rc(e) {
      let t = Is.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
      e && (e.path != null && (t = Ac(e.path)), e.encoding != null && (r = e.encoding));
      try {
        let o = an.parse(Ec.readFileSync(t, { encoding: r }));
        return Object.keys(o).forEach(function(s) {
          Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Ii(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
        }), { parsed: o };
      } catch (o) {
        return n && Ii(`Failed to load ${t} ${o.message}`), { error: o };
      }
    }
    var an = { config: Rc, parse: Cc };
    ln.exports.config = an.config;
    ln.exports.parse = an.parse;
    ln.exports = an;
  });
  var $s = Q((ch, Ls) => {
    Ls.exports = (e) => {
      let t = e.match(/^[ \t]*(?=\S)/gm);
      return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
    };
  });
  var js = Q((ph, qs) => {
    var Dc = $s();
    qs.exports = (e) => {
      let t = Dc(e);
      if (t === 0)
        return e;
      let r = new RegExp(`^[ \\t]{${t}}`, "gm");
      return e.replace(r, "");
    };
  });
  var Bs = Q((dh, kc) => {
    kc.exports = { name: "@prisma/engines-version", version: "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "23fdc5965b1e05fc54e5f26ed3de66776b93de64" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.8", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
  });
  var Fi = Q((cn) => {
    Object.defineProperty(cn, "__esModule", { value: true });
    cn.enginesVersion = undefined;
    cn.enginesVersion = Bs().prisma.enginesVersion;
  });
  var qi = Q((Dh, Ks) => {
    Ks.exports = (e, t = 1, r) => {
      if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
        throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
      if (typeof t != "number")
        throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
      if (typeof r.indent != "string")
        throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
      if (t === 0)
        return e;
      let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
      return e.replace(n, r.indent.repeat(t));
    };
  });
  var Hs = Q((Oh, Js) => {
    Js.exports = ({ onlyFirst: e = false } = {}) => {
      let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(t, e ? undefined : "g");
    };
  });
  var Ui = Q((Nh, Ws) => {
    var Uc = Hs();
    Ws.exports = (e) => typeof e == "string" ? e.replace(Uc(), "") : e;
  });
  var zs = Q((qh, dn) => {
    dn.exports = (e = {}) => {
      let t;
      if (e.repoUrl)
        t = e.repoUrl;
      else if (e.user && e.repo)
        t = `https://github.com/${e.user}/${e.repo}`;
      else
        throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
      let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
      for (let i of n) {
        let o = e[i];
        if (o !== undefined) {
          if (i === "labels" || i === "projects") {
            if (!Array.isArray(o))
              throw new TypeError(`The \`${i}\` option should be an array`);
            o = o.join(",");
          }
          r.searchParams.set(i, o);
        }
      }
      return r.toString();
    };
    dn.exports.default = dn.exports;
  });
  var Do = Q((MT, Il) => {
    Il.exports = function() {
      function e(t, r, n, i, o) {
        return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
      }
      return function(t, r) {
        if (t === r)
          return 0;
        if (t.length > r.length) {
          var n = t;
          t = r, r = n;
        }
        for (var i = t.length, o = r.length;i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
          i--, o--;
        for (var s = 0;s < i && t.charCodeAt(s) === r.charCodeAt(s); )
          s++;
        if (i -= s, o -= s, i === 0 || o < 3)
          return o;
        var a = 0, l, u, c, p, d, f, h, g, _, A, R, E, S = [];
        for (l = 0;l < i; l++)
          S.push(l + 1), S.push(t.charCodeAt(s + l));
        for (var we = S.length - 1;a < o - 3; )
          for (_ = r.charCodeAt(s + (u = a)), A = r.charCodeAt(s + (c = a + 1)), R = r.charCodeAt(s + (p = a + 2)), E = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0;l < we; l += 2)
            h = S[l], g = S[l + 1], u = e(h, u, c, _, g), c = e(u, c, p, A, g), p = e(c, p, d, R, g), f = e(p, d, f, E, g), S[l] = f, d = p, p = c, c = u, u = h;
        for (;a < o; )
          for (_ = r.charCodeAt(s + (u = a)), f = ++a, l = 0;l < we; l += 2)
            h = S[l], S[l] = f = e(h, u, f, _, S[l + 1]), u = h;
        return f;
      };
    }();
  });
  var qg = {};
  Tt(qg, { DMMF: () => Ee, DMMFClass: () => Qr, Debug: () => xi, Decimal: () => Ne, Extensions: () => ui, MetricsClient: () => Ft, NotFoundError: () => Ve, ObjectEnumValue: () => De, PrismaClientInitializationError: () => O, PrismaClientKnownRequestError: () => H, PrismaClientRustPanicError: () => be, PrismaClientUnknownRequestError: () => W, PrismaClientValidationError: () => te, Public: () => ci, Sql: () => fe, Types: () => pi, defineDmmfProperty: () => Zs, detectRuntime: () => $n, empty: () => ea, getPrismaClient: () => Eu, itxClientDenyList: () => Hi, join: () => Xs, makeStrictEnum: () => Pu, objectEnumNames: () => Gc, objectEnumValues: () => gn, raw: () => Xi, sqltag: () => eo, warnEnvConflicts: () => vu, warnOnce: () => ar });
  module.exports = Mu(qg);
  var ui = {};
  Tt(ui, { defineExtension: () => Vo, getExtensionContext: () => Uo });
  var ci = {};
  Tt(ci, { validator: () => Ko });
  var pi = {};
  Tt(pi, { Extensions: () => Qo, Public: () => Go, Result: () => Jo, Utils: () => Ho });
  var Qo = {};
  var Go = {};
  var Jo = {};
  var Ho = {};
  var Ge = (e, t) => {
    let r = {};
    for (let n of e) {
      let i = n[t];
      r[i] = n;
    }
    return r;
  };
  var Qr = class {
    constructor(t) {
      this.document = t;
    }
    get compositeNames() {
      return this._compositeNames ?? (this._compositeNames = new Set(this.datamodel.types.map((t) => t.name)));
    }
    get inputTypesByName() {
      return this._inputTypesByName ?? (this._inputTypesByName = this.buildInputTypesMap());
    }
    get typeAndModelMap() {
      return this._typeAndModelMap ?? (this._typeAndModelMap = this.buildTypeModelMap());
    }
    get mappingsMap() {
      return this._mappingsMap ?? (this._mappingsMap = this.buildMappingsMap());
    }
    get outputTypeMap() {
      return this._outputTypeMap ?? (this._outputTypeMap = this.buildMergedOutputTypeMap());
    }
    get rootFieldMap() {
      return this._rootFieldMap ?? (this._rootFieldMap = this.buildRootFieldMap());
    }
    get datamodel() {
      return this.document.datamodel;
    }
    get mappings() {
      return this.document.mappings;
    }
    get schema() {
      return this.document.schema;
    }
    get inputObjectTypes() {
      return this.schema.inputObjectTypes;
    }
    get outputObjectTypes() {
      return this.schema.outputObjectTypes;
    }
    isComposite(t) {
      return this.compositeNames.has(t);
    }
    getOtherOperationNames() {
      return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
    }
    hasEnumInNamespace(t, r) {
      return this.schema.enumTypes[r]?.find((n) => n.name === t) !== undefined;
    }
    resolveInputObjectType(t) {
      return this.inputTypesByName.get(di(t.type, t.namespace));
    }
    resolveOutputObjectType(t) {
      if (t.location === "outputObjectTypes")
        return this.outputObjectTypes[t.namespace ?? "prisma"].find((r) => r.name === t.type);
    }
    buildModelMap() {
      return Ge(this.datamodel.models, "name");
    }
    buildTypeMap() {
      return Ge(this.datamodel.types, "name");
    }
    buildTypeModelMap() {
      return { ...this.buildTypeMap(), ...this.buildModelMap() };
    }
    buildMappingsMap() {
      return Ge(this.mappings.modelOperations, "model");
    }
    buildMergedOutputTypeMap() {
      return { model: Ge(this.schema.outputObjectTypes.model, "name"), prisma: Ge(this.schema.outputObjectTypes.prisma, "name") };
    }
    buildRootFieldMap() {
      return { ...Ge(this.outputTypeMap.prisma.Query.fields, "name"), ...Ge(this.outputTypeMap.prisma.Mutation.fields, "name") };
    }
    buildInputTypesMap() {
      let t = new Map;
      for (let r of this.inputObjectTypes.prisma)
        t.set(di(r.name, "prisma"), r);
      if (!this.inputObjectTypes.model)
        return t;
      for (let r of this.inputObjectTypes.model)
        t.set(di(r.name, "model"), r);
      return t;
    }
  };
  var Ee;
  ((t) => {
    let e;
    ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
  })(Ee || (Ee = {}));
  var zr = D(os2());
  var Zu = 100;
  var zt = [];
  typeof process < "u" && typeof process.stderr?.write != "function" && (zr.default.log = console.debug ?? console.log);
  var xi = Object.assign(Xu, zr.default);
  var $ = xi;
  var wi;
  var ls;
  var us;
  var cs;
  var ps = true;
  typeof process < "u" && ({ FORCE_COLOR: wi, NODE_DISABLE_COLORS: ls, NO_COLOR: us, TERM: cs } = process.env || {}, ps = process.stdout && process.stdout.isTTY);
  var ec = { enabled: !ls && us == null && cs !== "dumb" && (wi != null && wi !== "0" || ps) };
  var ny = q(0, 0);
  var de = q(1, 22);
  var He = q(2, 22);
  var iy = q(3, 23);
  var ce = q(4, 24);
  var oy = q(7, 27);
  var sy = q(8, 28);
  var ay = q(9, 29);
  var ly = q(30, 39);
  var ve = q(31, 39);
  var pt = q(32, 39);
  var Re = q(33, 39);
  var Rt = q(34, 39);
  var uy = q(35, 39);
  var We = q(36, 39);
  var cy = q(37, 39);
  var Yr = q(90, 39);
  var py = q(90, 39);
  var dy = q(40, 49);
  var my = q(41, 49);
  var fy = q(42, 49);
  var gy = q(43, 49);
  var yy = q(44, 49);
  var hy = q(45, 49);
  var by = q(46, 49);
  var xy = q(47, 49);
  var ds = D(import.meta.require("fs"));
  var Pi = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "openbsd", "netbsd", "arm"];
  var Zr = "libquery_engine";
  var Ts = D(import.meta.require("child_process"));
  var Mi = D(import.meta.require("fs/promises"));
  var on = D(import.meta.require("os"));
  var Be = Symbol.for("@ts-pattern/matcher");
  var tc = Symbol.for("@ts-pattern/isVariadic");
  var tn = "@ts-pattern/anonymous-select-key";
  var vi = (e) => !!(e && typeof e == "object");
  var en = (e) => e && !!e[Be];
  var Ie = (e, t, r) => {
    if (en(e)) {
      let n = e[Be](), { matched: i, selections: o } = n.match(t);
      return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
    }
    if (vi(e)) {
      if (!vi(t))
        return false;
      if (Array.isArray(e)) {
        if (!Array.isArray(t))
          return false;
        let n = [], i = [], o = [];
        for (let s of e.keys()) {
          let a = e[s];
          en(a) && a[tc] ? o.push(a) : o.length ? i.push(a) : n.push(a);
        }
        if (o.length) {
          if (o.length > 1)
            throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
          if (t.length < n.length + i.length)
            return false;
          let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
          return n.every((u, c) => Ie(u, s[c], r)) && i.every((u, c) => Ie(u, a[c], r)) && (o.length === 0 || Ie(o[0], l, r));
        }
        return e.length === t.length && e.every((s, a) => Ie(s, t[a], r));
      }
      return Object.keys(e).every((n) => {
        let i = e[n];
        return ((n in t) || en(o = i) && o[Be]().matcherType === "optional") && Ie(i, t[n], r);
        var o;
      });
    }
    return Object.is(t, e);
  };
  var Ze = (e) => {
    var t, r, n;
    return vi(e) ? en(e) ? (t = (r = (n = e[Be]()).getSelectionKeys) == null ? undefined : r.call(n)) != null ? t : [] : Array.isArray(e) ? Yt(e, Ze) : Yt(Object.values(e), Ze) : [];
  };
  var Yt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
  var My = Te(k(function(e) {
    return true;
  }));
  var mt = (e) => Object.assign(Te(e), { startsWith: (t) => {
    return mt(V(e, (r = t, k((n) => dt(n) && n.startsWith(r)))));
    var r;
  }, endsWith: (t) => {
    return mt(V(e, (r = t, k((n) => dt(n) && n.endsWith(r)))));
    var r;
  }, minLength: (t) => mt(V(e, ((r) => k((n) => dt(n) && n.length >= r))(t))), maxLength: (t) => mt(V(e, ((r) => k((n) => dt(n) && n.length <= r))(t))), includes: (t) => {
    return mt(V(e, (r = t, k((n) => dt(n) && n.includes(r)))));
    var r;
  }, regex: (t) => {
    return mt(V(e, (r = t, k((n) => dt(n) && !!n.match(r)))));
    var r;
  } });
  var Sy = mt(k(dt));
  var Se = (e) => Object.assign(Te(e), { between: (t, r) => Se(V(e, ((n, i) => k((o) => Me(o) && n <= o && i >= o))(t, r))), lt: (t) => Se(V(e, ((r) => k((n) => Me(n) && n < r))(t))), gt: (t) => Se(V(e, ((r) => k((n) => Me(n) && n > r))(t))), lte: (t) => Se(V(e, ((r) => k((n) => Me(n) && n <= r))(t))), gte: (t) => Se(V(e, ((r) => k((n) => Me(n) && n >= r))(t))), int: () => Se(V(e, k((t) => Me(t) && Number.isInteger(t)))), finite: () => Se(V(e, k((t) => Me(t) && Number.isFinite(t)))), positive: () => Se(V(e, k((t) => Me(t) && t > 0))), negative: () => Se(V(e, k((t) => Me(t) && t < 0))) });
  var Iy = Se(k(Me));
  var Ye = (e) => Object.assign(Te(e), { between: (t, r) => Ye(V(e, ((n, i) => k((o) => ze(o) && n <= o && i >= o))(t, r))), lt: (t) => Ye(V(e, ((r) => k((n) => ze(n) && n < r))(t))), gt: (t) => Ye(V(e, ((r) => k((n) => ze(n) && n > r))(t))), lte: (t) => Ye(V(e, ((r) => k((n) => ze(n) && n <= r))(t))), gte: (t) => Ye(V(e, ((r) => k((n) => ze(n) && n >= r))(t))), positive: () => Ye(V(e, k((t) => ze(t) && t > 0))), negative: () => Ye(V(e, k((t) => ze(t) && t < 0))) });
  var Dy = Ye(k(ze));
  var ky = Te(k(function(e) {
    return typeof e == "boolean";
  }));
  var Fy = Te(k(function(e) {
    return typeof e == "symbol";
  }));
  var Oy = Te(k(function(e) {
    return e == null;
  }));
  var Ti = { matched: false, value: undefined };
  var _i = class e {
    constructor(t, r) {
      this.input = undefined, this.state = undefined, this.input = t, this.state = r;
    }
    with(...t) {
      if (this.state.matched)
        return this;
      let r = t[t.length - 1], n = [t[0]], i;
      t.length === 3 && typeof t[1] == "function" ? (n.push(t[0]), i = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
      let o = false, s = {}, a = (u, c) => {
        o = true, s[u] = c;
      }, l = !n.some((u) => Ie(u, this.input, a)) || i && !i(this.input) ? Ti : { matched: true, value: r(o ? tn in s ? s[tn] : s : this.input, this.input) };
      return new e(this.input, l);
    }
    when(t, r) {
      if (this.state.matched)
        return this;
      let n = !!t(this.input);
      return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Ti);
    }
    otherwise(t) {
      return this.state.matched ? this.state.value : t(this.input);
    }
    exhaustive() {
      return this.run();
    }
    run() {
      if (this.state.matched)
        return this.state.value;
      let t;
      try {
        t = JSON.stringify(this.input);
      } catch {
        t = this.input;
      }
      throw new Error(`Pattern matching error: no pattern matches value ${t}`);
    }
    returnType() {
      return this;
    }
  };
  var _s = import.meta.require("util");
  var Es = D(ws());
  var sc = { warn: Re("prisma:warn") };
  var ac = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var lc = (0, _s.promisify)(Ts.default.exec);
  var me = $("prisma:get-platform");
  var uc = ["1.0.x", "1.1.x", "3.0.x"];
  var nn = {};
  var ki = D(Ds());
  var un = D(import.meta.require("fs"));
  var Dt = D(import.meta.require("path"));
  var Di = $("prisma:tryLoadEnv");
  var Ns = "library";
  var Fc = D(Fi());
  var j = D(import.meta.require("path"));
  var Oc = D(Fi());
  var Ph = $("prisma:engines");
  var vh = "libquery-engine";
  j.default.join(__dirname, "../query-engine-darwin");
  j.default.join(__dirname, "../query-engine-darwin-arm64");
  j.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
  j.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
  j.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
  j.default.join(__dirname, "../query-engine-linux-static-x64");
  j.default.join(__dirname, "../query-engine-linux-static-arm64");
  j.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
  j.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
  j.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
  j.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
  j.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
  j.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
  j.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
  j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
  j.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
  j.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
  j.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
  j.default.join(__dirname, "../query_engine-windows.dll.node");
  var Oi = D(import.meta.require("fs"));
  var Us = $("chmodPlusX");
  var ir = D(import.meta.require("path"));
  var Qs = D(qi());
  var ji = class {
    constructor(t) {
      this.config = t;
    }
    toString() {
      let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: Nc(t.binaryTargets) }));
      return `generator ${t.name} {
${(0, Qs.default)(Lc(n), 2)}
}`;
    }
  };
  var sr = {};
  Tt(sr, { error: () => Bc, info: () => jc, log: () => qc, query: () => Vc, should: () => Gs, tags: () => or, warn: () => Vi });
  var or = { error: ve("prisma:error"), warn: Re("prisma:warn"), info: We("prisma:info"), query: Rt("prisma:query") };
  var Gs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
  var Qi = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
  var Ys = new Set;
  var ar = (e, t, ...r) => {
    Ys.has(e) || (Ys.add(e), Vi(t, ...r));
  };
  var H = class extends Error {
    constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
      super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  v(H, "PrismaClientKnownRequestError");
  var Ve = class extends H {
    constructor(t, r) {
      super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
    }
  };
  v(Ve, "NotFoundError");
  var O = class e extends Error {
    constructor(t, r, n) {
      super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  v(O, "PrismaClientInitializationError");
  var be = class extends Error {
    constructor(t, r) {
      super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  v(be, "PrismaClientRustPanicError");
  var W = class extends Error {
    constructor(t, { clientVersion: r, batchRequestIdx: n }) {
      super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  v(W, "PrismaClientUnknownRequestError");
  var te = class extends Error {
    constructor(r, { clientVersion: n }) {
      super(r);
      this.name = "PrismaClientValidationError";
      this.clientVersion = n;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  v(te, "PrismaClientValidationError");
  var Ft = class {
    constructor(t) {
      this._engine = t;
    }
    prometheus(t) {
      return this._engine.metrics({ format: "prometheus", ...t });
    }
    json(t) {
      return this._engine.metrics({ format: "json", ...t });
    }
  };
  var Qc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
  var Hi = Qc;
  var Gc = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
  var fn = Symbol();
  var Wi = new WeakMap;
  var De = class {
    constructor(t) {
      t === fn ? Wi.set(this, `Prisma.${this._getName()}`) : Wi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Wi.get(this);
    }
  };
  var ur = class extends De {
    _getNamespace() {
      return "NullTypes";
    }
  };
  var cr = class extends ur {
  };
  zi(cr, "DbNull");
  var pr = class extends ur {
  };
  zi(pr, "JsonNull");
  var dr = class extends ur {
  };
  zi(dr, "AnyNull");
  var gn = { classes: { DbNull: cr, JsonNull: pr, AnyNull: dr }, instances: { DbNull: new cr(fn), JsonNull: new pr(fn), AnyNull: new dr(fn) } };
  var Yi = class {
    constructor() {
      this.registeredErrors = [];
    }
    consumeError(t) {
      return this.registeredErrors[t];
    }
    registerNewError(t) {
      let r = 0;
      for (;this.registeredErrors[r] !== undefined; )
        r++;
      return this.registeredErrors[r] = { error: t }, r;
    }
  };
  var Zi = (e) => {
    let t = new Yi, r = yt(t, e.startTransaction.bind(e)), n = { errorRegistry: t, queryRaw: yt(t, e.queryRaw.bind(e)), executeRaw: yt(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...i) => (await r(...i)).map((s) => Jc(t, s)) };
    return e.getConnectionInfo && (n.getConnectionInfo = Hc(t, e.getConnectionInfo.bind(e))), n;
  };
  var Jc = (e, t) => ({ provider: t.provider, options: t.options, queryRaw: yt(e, t.queryRaw.bind(t)), executeRaw: yt(e, t.executeRaw.bind(t)), commit: yt(e, t.commit.bind(t)), rollback: yt(e, t.rollback.bind(t)) });
  var bu = import.meta.require("async_hooks");
  var xu = import.meta.require("events");
  var wu = D(import.meta.require("fs"));
  var Vr = D(import.meta.require("path"));
  var fe = class e {
    constructor(t, r) {
      if (t.length - 1 !== r.length)
        throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
      let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
      this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
      let i = 0, o = 0;
      for (;i < r.length; ) {
        let s = r[i++], a = t[i];
        if (s instanceof e) {
          this.strings[o] += s.strings[0];
          let l = 0;
          for (;l < s.values.length; )
            this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
          this.strings[o] += a;
        } else
          this.values[o++] = s, this.strings[o] = a;
      }
    }
    get text() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `\$${r}${this.strings[r++]}`;
      return n;
    }
    get sql() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `?${this.strings[r++]}`;
      return n;
    }
    get statement() {
      let t = this.strings.length, r = 1, n = this.strings[0];
      for (;r < t; )
        n += `:${r}${this.strings[r++]}`;
      return n;
    }
    inspect() {
      return { text: this.text, sql: this.sql, values: this.values };
    }
  };
  var ea = Xi("");
  var ke = class {
    constructor() {
      this._map = new Map;
    }
    get(t) {
      return this._map.get(t)?.value;
    }
    set(t, r) {
      this._map.set(t, { value: r });
    }
    getOrCreate(t, r) {
      let n = this._map.get(t);
      if (n)
        return n.value;
      let i = r();
      return this.set(t, i), i;
    }
  };
  var na = import.meta.require("util");
  var yn = { enumerable: true, configurable: true, writable: true };
  var ta = Symbol.for("nodejs.util.inspect.custom");
  var Ot = class {
    constructor(t = 0, r) {
      this.context = r;
      this.lines = [];
      this.currentLine = "";
      this.currentIndent = 0;
      this.currentIndent = t;
    }
    write(t) {
      return typeof t == "string" ? this.currentLine += t : t.write(this), this;
    }
    writeJoined(t, r) {
      let n = r.length - 1;
      for (let i = 0;i < r.length; i++)
        this.write(r[i]), i !== n && this.write(t);
      return this;
    }
    writeLine(t) {
      return this.write(t).newLine();
    }
    newLine() {
      this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = undefined;
      let t = this.afterNextNewLineCallback;
      return this.afterNextNewLineCallback = undefined, t?.(), this;
    }
    withIndent(t) {
      return this.indent(), t(this), this.unindent(), this;
    }
    afterNextNewline(t) {
      return this.afterNextNewLineCallback = t, this;
    }
    indent() {
      return this.currentIndent++, this;
    }
    unindent() {
      return this.currentIndent > 0 && this.currentIndent--, this;
    }
    addMarginSymbol(t) {
      return this.marginSymbol = t, this;
    }
    toString() {
      return this.lines.concat(this.indentedCurrentLine()).join(`
`);
    }
    getCurrentLineLength() {
      return this.currentLine.length;
    }
    indentedCurrentLine() {
      let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
      return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
    }
  };
  var Lt = 9000000000000000;
  var rt = 1e9;
  var to = "0123456789abcdef";
  var wn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
  var En = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
  var ro = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Lt, maxE: Lt, crypto: false };
  var aa;
  var Ue;
  var T = true;
  var vn = "[DecimalError] ";
  var tt = vn + "Invalid argument: ";
  var la = vn + "Precision limit exceeded";
  var ua = vn + "crypto unavailable";
  var ca = "[object Decimal]";
  var ae = Math.floor;
  var G = Math.pow;
  var zc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  var Yc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  var Zc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  var pa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  var Ce = 1e7;
  var P = 7;
  var Xc = 9007199254740991;
  var ep = wn.length - 1;
  var no = En.length - 1;
  var m = { toStringTag: ca };
  m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s < 0 && (e.s = 1), x(e);
  };
  m.ceil = function() {
    return x(new this.constructor(this), this.e + 1, 2);
  };
  m.clampedTo = m.clamp = function(e, t) {
    var r, n = this, i = n.constructor;
    if (e = new i(e), t = new i(t), !e.s || !t.s)
      return new i(NaN);
    if (e.gt(t))
      throw Error(tt + t);
    return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
  };
  m.comparedTo = m.cmp = function(e) {
    var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
    if (!s || !a)
      return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
    if (!s[0] || !a[0])
      return s[0] ? l : a[0] ? -u : 0;
    if (l !== u)
      return l;
    if (o.e !== e.e)
      return o.e > e.e ^ l < 0 ? 1 : -1;
    for (n = s.length, i = a.length, t = 0, r = n < i ? n : i;t < r; ++t)
      if (s[t] !== a[t])
        return s[t] > a[t] ^ l < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
  };
  m.cosine = m.cos = function() {
    var e, t, r = this, n = r.constructor;
    return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = tp(n, ya(n, r)), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
  };
  m.cubeRoot = m.cbrt = function() {
    var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
    if (!c.isFinite() || c.isZero())
      return new p(c);
    for (T = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = re(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3;; )
      if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), re(a.d).slice(0, s) === (r = re(n.d)).slice(0, s))
        if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
          if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(c))) {
            n = a;
            break;
          }
          s += 4, i = 1;
        } else {
          (!+r || !+r.slice(1) && r.charAt(0) == "5") && (x(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
          break;
        }
    return T = true, x(n, e, p.rounding, t);
  };
  m.decimalPlaces = m.dp = function() {
    var e, t = this.d, r = NaN;
    if (t) {
      if (e = t.length - 1, r = (e - ae(this.e / P)) * P, e = t[e], e)
        for (;e % 10 == 0; e /= 10)
          r--;
      r < 0 && (r = 0);
    }
    return r;
  };
  m.dividedBy = m.div = function(e) {
    return L(this, new this.constructor(e));
  };
  m.dividedToIntegerBy = m.divToInt = function(e) {
    var t = this, r = t.constructor;
    return x(L(t, new r(e), 0, 1, 1), r.precision, r.rounding);
  };
  m.equals = m.eq = function(e) {
    return this.cmp(e) === 0;
  };
  m.floor = function() {
    return x(new this.constructor(this), this.e + 1, 3);
  };
  m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0;
  };
  m.greaterThanOrEqualTo = m.gte = function(e) {
    var t = this.cmp(e);
    return t == 1 || t === 0;
  };
  m.hyperbolicCosine = m.cosh = function() {
    var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
    if (!o.isFinite())
      return new s(o.s ? 1 / 0 : NaN);
    if (o.isZero())
      return a;
    r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / _n(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = $t(s, 1, o.times(t), new s(1), true);
    for (var l, u = e, c = new s(8);u--; )
      l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
    return x(o, s.precision = r, s.rounding = n, true);
  };
  m.hyperbolicSine = m.sinh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    if (!i.isFinite() || i.isZero())
      return new o(i);
    if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
      i = $t(o, 2, i, i, true);
    else {
      e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / _n(5, e)), i = $t(o, 2, i, i, true);
      for (var s, a = new o(5), l = new o(16), u = new o(20);e--; )
        s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
    }
    return o.precision = t, o.rounding = r, x(i, t, r, true);
  };
  m.hyperbolicTangent = m.tanh = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, L(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
  };
  m.inverseCosine = m.acos = function() {
    var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
    return n !== -1 ? n === 0 ? t.isNeg() ? _e(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? _e(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = _e(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
  };
  m.inverseHyperbolicCosine = m.acosh = function() {
    var e, t, r = this, n = r.constructor;
    return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, T = false, r = r.times(r).minus(1).sqrt().plus(r), T = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
  };
  m.inverseHyperbolicSine = m.asinh = function() {
    var e, t, r = this, n = r.constructor;
    return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, T = false, r = r.times(r).plus(1).sqrt().plus(r), T = true, n.precision = e, n.rounding = t, r.ln());
  };
  m.inverseHyperbolicTangent = m.atanh = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? x(new o(i), e, t, true) : (o.precision = r = n - i.e, i = L(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
  };
  m.inverseSine = m.asin = function() {
    var e, t, r, n, i = this, o = i.constructor;
    return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = _e(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
  };
  m.inverseTangent = m.atan = function() {
    var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
    if (u.isFinite()) {
      if (u.isZero())
        return new c(u);
      if (u.abs().eq(1) && p + 4 <= no)
        return s = _e(c, p + 4, d).times(0.25), s.s = u.s, s;
    } else {
      if (!u.s)
        return new c(NaN);
      if (p + 4 <= no)
        return s = _e(c, p + 4, d).times(0.5), s.s = u.s, s;
    }
    for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / P + 2 | 0), e = r;e; --e)
      u = u.div(u.times(u).plus(1).sqrt().plus(1));
    for (T = false, t = Math.ceil(a / P), n = 1, l = u.times(u), s = new c(u), i = u;e !== -1; )
      if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== undefined)
        for (e = t;s.d[e] === o.d[e] && e--; )
          ;
    return r && (s = s.times(2 << r - 1)), T = true, x(s, c.precision = p, c.rounding = d, true);
  };
  m.isFinite = function() {
    return !!this.d;
  };
  m.isInteger = m.isInt = function() {
    return !!this.d && ae(this.e / P) > this.d.length - 2;
  };
  m.isNaN = function() {
    return !this.s;
  };
  m.isNegative = m.isNeg = function() {
    return this.s < 0;
  };
  m.isPositive = m.isPos = function() {
    return this.s > 0;
  };
  m.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  m.lessThan = m.lt = function(e) {
    return this.cmp(e) < 0;
  };
  m.lessThanOrEqualTo = m.lte = function(e) {
    return this.cmp(e) < 1;
  };
  m.logarithm = m.log = function(e) {
    var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
    if (e == null)
      e = new c(10), t = true;
    else {
      if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
        return new c(NaN);
      t = e.eq(10);
    }
    if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
      return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
    if (t)
      if (r.length > 1)
        o = true;
      else {
        for (i = r[0];i % 10 === 0; )
          i /= 10;
        o = i !== 1;
      }
    if (T = false, a = p + f, s = et(u, a), n = t ? Pn(c, a + 10) : et(e, a), l = L(s, n, a, 1), yr(l.d, i = p, d))
      do
        if (a += 10, s = et(u, a), n = t ? Pn(c, a + 10) : et(e, a), l = L(s, n, a, 1), !o) {
          +re(l.d).slice(i + 1, i + 15) + 1 == 100000000000000 && (l = x(l, p + 1, 0));
          break;
        }
      while (yr(l.d, i += 10, d));
    return T = true, x(l, p, d);
  };
  m.minus = m.sub = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, h = f.constructor;
    if (e = new h(e), !f.d || !e.d)
      return !f.s || !e.s ? e = new h(NaN) : f.d ? e.s = -e.s : e = new h(e.d || f.s !== e.s ? f : NaN), e;
    if (f.s != e.s)
      return e.s = -e.s, f.plus(e);
    if (u = f.d, d = e.d, a = h.precision, l = h.rounding, !u[0] || !d[0]) {
      if (d[0])
        e.s = -e.s;
      else if (u[0])
        e = new h(f);
      else
        return new h(l === 3 ? -0 : 0);
      return T ? x(e, a, l) : e;
    }
    if (r = ae(e.e / P), c = ae(f.e / P), u = u.slice(), o = c - r, o) {
      for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / P), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o;n--; )
        t.push(0);
      t.reverse();
    } else {
      for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0;n < s; n++)
        if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
      o = 0;
    }
    for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s;n > 0; --n)
      u[s++] = 0;
    for (n = d.length;n > o; ) {
      if (u[--n] < d[n]) {
        for (i = n;i && u[--i] === 0; )
          u[i] = Ce - 1;
        --u[i], u[n] += Ce;
      }
      u[n] -= d[n];
    }
    for (;u[--s] === 0; )
      u.pop();
    for (;u[0] === 0; u.shift())
      --r;
    return u[0] ? (e.d = u, e.e = Tn(u, r), T ? x(e, a, l) : e) : new h(l === 3 ? -0 : 0);
  };
  m.modulo = m.mod = function(e) {
    var t, r = this, n = r.constructor;
    return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? x(new n(r), n.precision, n.rounding) : (T = false, n.modulo == 9 ? (t = L(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = L(r, e, 0, n.modulo, 1), t = t.times(e), T = true, r.minus(t));
  };
  m.naturalExponential = m.exp = function() {
    return io(this);
  };
  m.naturalLogarithm = m.ln = function() {
    return et(this);
  };
  m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s, x(e);
  };
  m.plus = m.add = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
    if (e = new d(e), !p.d || !e.d)
      return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
    if (p.s != e.s)
      return e.s = -e.s, p.minus(e);
    if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
      return c[0] || (e = new d(p)), T ? x(e, a, l) : e;
    if (o = ae(p.e / P), n = ae(e.e / P), u = u.slice(), i = o - n, i) {
      for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / P), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse();i--; )
        r.push(0);
      r.reverse();
    }
    for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0;i; )
      t = (u[--i] = u[i] + c[i] + t) / Ce | 0, u[i] %= Ce;
    for (t && (u.unshift(t), ++n), s = u.length;u[--s] == 0; )
      u.pop();
    return e.d = u, e.e = Tn(u, n), T ? x(e, a, l) : e;
  };
  m.precision = m.sd = function(e) {
    var t, r = this;
    if (e !== undefined && e !== !!e && e !== 1 && e !== 0)
      throw Error(tt + e);
    return r.d ? (t = da(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
  };
  m.round = function() {
    var e = this, t = e.constructor;
    return x(new t(e), e.e + 1, t.rounding);
  };
  m.sine = m.sin = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = np(n, ya(n, r)), n.precision = e, n.rounding = t, x(Ue > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.squareRoot = m.sqrt = function() {
    var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
    if (u !== 1 || !a || !a[0])
      return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
    for (T = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = re(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ae((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3;; )
      if (o = n, n = o.plus(L(s, o, r + 2, 1)).times(0.5), re(o.d).slice(0, r) === (t = re(n.d)).slice(0, r))
        if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
          if (!i && (x(o, l + 1, 0), o.times(o).eq(s))) {
            n = o;
            break;
          }
          r += 4, i = 1;
        } else {
          (!+t || !+t.slice(1) && t.charAt(0) == "5") && (x(n, l + 1, 1), e = !n.times(n).eq(s));
          break;
        }
    return T = true, x(n, l, c.rounding, e);
  };
  m.tangent = m.tan = function() {
    var e, t, r = this, n = r.constructor;
    return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = L(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
  };
  m.times = m.mul = function(e) {
    var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
    if (e.s *= c.s, !d || !d[0] || !f || !f[0])
      return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
    for (r = ae(c.e / P) + ae(e.e / P), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s;n--; )
      o.push(0);
    for (n = u;--n >= 0; ) {
      for (t = 0, i = l + n;i > n; )
        a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % Ce | 0, t = a / Ce | 0;
      o[i] = (o[i] + t) % Ce | 0;
    }
    for (;!o[--s]; )
      o.pop();
    return t ? ++r : o.shift(), e.d = o, e.e = Tn(o, r), T ? x(e, p.precision, p.rounding) : e;
  };
  m.toBinary = function(e, t) {
    return so(this, 2, e, t);
  };
  m.toDecimalPlaces = m.toDP = function(e, t) {
    var r = this, n = r.constructor;
    return r = new n(r), e === undefined ? r : (ge(e, 0, rt), t === undefined ? t = n.rounding : ge(t, 0, 8), x(r, e + r.e + 1, t));
  };
  m.toExponential = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = Oe(n, true) : (ge(e, 0, rt), t === undefined ? t = i.rounding : ge(t, 0, 8), n = x(new i(n), e + 1, t), r = Oe(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toFixed = function(e, t) {
    var r, n, i = this, o = i.constructor;
    return e === undefined ? r = Oe(i) : (ge(e, 0, rt), t === undefined ? t = o.rounding : ge(t, 0, 8), n = x(new o(i), e + i.e + 1, t), r = Oe(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
  };
  m.toFraction = function(e) {
    var t, r, n, i, o, s, a, l, u, c, p, d, f = this, h = f.d, g = f.constructor;
    if (!h)
      return new g(f);
    if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = da(h) - f.e - 1, s = o % P, t.d[0] = G(10, s < 0 ? P + s : s), e == null)
      e = o > 0 ? t : u;
    else {
      if (a = new g(e), !a.isInt() || a.lt(u))
        throw Error(tt + a);
      e = a.gt(t) ? o > 0 ? t : u : a;
    }
    for (T = false, a = new g(re(h)), c = g.precision, g.precision = o = h.length * P * 2;p = L(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
      r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
    return i = L(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, T = true, d;
  };
  m.toHexadecimal = m.toHex = function(e, t) {
    return so(this, 16, e, t);
  };
  m.toNearest = function(e, t) {
    var r = this, n = r.constructor;
    if (r = new n(r), e == null) {
      if (!r.d)
        return r;
      e = new n(1), t = n.rounding;
    } else {
      if (e = new n(e), t === undefined ? t = n.rounding : ge(t, 0, 8), !r.d)
        return e.s ? r : e;
      if (!e.d)
        return e.s && (e.s = r.s), e;
    }
    return e.d[0] ? (T = false, r = L(r, e, 0, t, 1).times(e), T = true, x(r)) : (e.s = r.s, r = e), r;
  };
  m.toNumber = function() {
    return +this;
  };
  m.toOctal = function(e, t) {
    return so(this, 8, e, t);
  };
  m.toPower = m.pow = function(e) {
    var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
    if (!a.d || !e.d || !a.d[0] || !e.d[0])
      return new l(G(+a, u));
    if (a = new l(a), a.eq(1))
      return a;
    if (n = l.precision, o = l.rounding, e.eq(1))
      return x(a, n, o);
    if (t = ae(e.e / P), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Xc)
      return i = ma(l, a, r, n), e.s < 0 ? new l(1).div(i) : x(i, n, o);
    if (s = a.s, s < 0) {
      if (t < e.d.length - 1)
        return new l(NaN);
      if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
        return a.s = s, a;
    }
    return r = G(+a, u), t = r == 0 || !isFinite(r) ? ae(u * (Math.log("0." + re(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (T = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = io(e.times(et(a, n + r)), n), i.d && (i = x(i, n + 5, 1), yr(i.d, n, o) && (t = n + 10, i = x(io(e.times(et(a, t + r)), t), t + 5, 1), +re(i.d).slice(n + 1, n + 15) + 1 == 100000000000000 && (i = x(i, n + 1, 0)))), i.s = s, T = true, l.rounding = o, x(i, n, o));
  };
  m.toPrecision = function(e, t) {
    var r, n = this, i = n.constructor;
    return e === undefined ? r = Oe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ge(e, 1, rt), t === undefined ? t = i.rounding : ge(t, 0, 8), n = x(new i(n), e, t), r = Oe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
  };
  m.toSignificantDigits = m.toSD = function(e, t) {
    var r = this, n = r.constructor;
    return e === undefined ? (e = n.precision, t = n.rounding) : (ge(e, 1, rt), t === undefined ? t = n.rounding : ge(t, 0, 8)), x(new n(r), e, t);
  };
  m.toString = function() {
    var e = this, t = e.constructor, r = Oe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() && !e.isZero() ? "-" + r : r;
  };
  m.truncated = m.trunc = function() {
    return x(new this.constructor(this), this.e + 1, 1);
  };
  m.valueOf = m.toJSON = function() {
    var e = this, t = e.constructor, r = Oe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
    return e.isNeg() ? "-" + r : r;
  };
  var L = function() {
    function e(n, i, o) {
      var s, a = 0, l = n.length;
      for (n = n.slice();l--; )
        s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
      return a && n.unshift(a), n;
    }
    function t(n, i, o, s) {
      var a, l;
      if (o != s)
        l = o > s ? 1 : -1;
      else
        for (a = l = 0;a < o; a++)
          if (n[a] != i[a]) {
            l = n[a] > i[a] ? 1 : -1;
            break;
          }
      return l;
    }
    function r(n, i, o, s) {
      for (var a = 0;o--; )
        n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
      for (;!n[0] && n.length > 1; )
        n.shift();
    }
    return function(n, i, o, s, a, l) {
      var u, c, p, d, f, h, g, _, A, R, E, S, we, X, ut, K, ie, je, oe, vt, Ur = n.constructor, li = n.s == i.s ? 1 : -1, se = n.d, N = i.d;
      if (!se || !se[0] || !N || !N[0])
        return new Ur(!n.s || !i.s || (se ? N && se[0] == N[0] : !N) ? NaN : se && se[0] == 0 || !N ? li * 0 : li / 0);
      for (l ? (f = 1, c = n.e - i.e) : (l = Ce, f = P, c = ae(n.e / f) - ae(i.e / f)), oe = N.length, ie = se.length, A = new Ur(li), R = A.d = [], p = 0;N[p] == (se[p] || 0); p++)
        ;
      if (N[p] > (se[p] || 0) && c--, o == null ? (X = o = Ur.precision, s = Ur.rounding) : a ? X = o + (n.e - i.e) + 1 : X = o, X < 0)
        R.push(1), h = true;
      else {
        if (X = X / f + 2 | 0, p = 0, oe == 1) {
          for (d = 0, N = N[0], X++;(p < ie || d) && X--; p++)
            ut = d * l + (se[p] || 0), R[p] = ut / N | 0, d = ut % N | 0;
          h = d || p < ie;
        } else {
          for (d = l / (N[0] + 1) | 0, d > 1 && (N = e(N, d, l), se = e(se, d, l), oe = N.length, ie = se.length), K = oe, E = se.slice(0, oe), S = E.length;S < oe; )
            E[S++] = 0;
          vt = N.slice(), vt.unshift(0), je = N[0], N[1] >= l / 2 && ++je;
          do
            d = 0, u = t(N, E, oe, S), u < 0 ? (we = E[0], oe != S && (we = we * l + (E[1] || 0)), d = we / je | 0, d > 1 ? (d >= l && (d = l - 1), g = e(N, d, l), _ = g.length, S = E.length, u = t(g, E, _, S), u == 1 && (d--, r(g, oe < _ ? vt : N, _, l))) : (d == 0 && (u = d = 1), g = N.slice()), _ = g.length, _ < S && g.unshift(0), r(E, g, S, l), u == -1 && (S = E.length, u = t(N, E, oe, S), u < 1 && (d++, r(E, oe < S ? vt : N, S, l))), S = E.length) : u === 0 && (d++, E = [0]), R[p++] = d, u && E[0] ? E[S++] = se[K] || 0 : (E = [se[K]], S = 1);
          while ((K++ < ie || E[0] !== undefined) && X--);
          h = E[0] !== undefined;
        }
        R[0] || R.shift();
      }
      if (f == 1)
        A.e = c, aa = h;
      else {
        for (p = 1, d = R[0];d >= 10; d /= 10)
          p++;
        A.e = p + c * f - 1, x(A, a ? o + A.e + 1 : o, s, h);
      }
      return A;
    };
  }();
  m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
  m[Symbol.toStringTag] = "Decimal";
  var bt = m.constructor = ha(ro);
  wn = new bt(wn);
  En = new bt(En);
  var Ne = bt;
  var hr = class {
    constructor(t, r, n, i, o) {
      this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
    }
    _toGraphQLInputType() {
      let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
      return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
    }
  };
  var Cn = class {
    constructor(t) {
      this.value = t;
    }
    write(t) {
      t.write(this.value);
    }
    markAsError() {
      this.value.markAsError();
    }
  };
  var An = (e) => e;
  var Rn = { bold: An, red: An, green: An, dim: An, enabled: false };
  var ba = { bold: de, red: ve, green: pt, dim: He, enabled: true };
  var Bt = { write(e) {
    e.writeLine(",");
  } };
  var Le = class {
    constructor(t) {
      this.contents = t;
      this.isUnderlined = false;
      this.color = (t2) => t2;
    }
    underline() {
      return this.isUnderlined = true, this;
    }
    setColor(t) {
      return this.color = t, this;
    }
    write(t) {
      let r = t.getCurrentLineLength();
      t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
        t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
      });
    }
  };
  var nt = class {
    constructor() {
      this.hasError = false;
    }
    markAsError() {
      return this.hasError = true, this;
    }
  };
  var Vt = class extends nt {
    constructor() {
      super(...arguments);
      this.items = [];
    }
    addItem(r) {
      return this.items.push(new Cn(r)), this;
    }
    getField(r) {
      return this.items[r];
    }
    getPrintWidth() {
      return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
    }
    write(r) {
      if (this.items.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithItems(r);
    }
    writeEmpty(r) {
      let n = new Le("[]");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithItems(r) {
      let { colors: n } = r.context;
      r.writeLine("[").withIndent(() => r.writeJoined(Bt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(n.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var xa = ": ";
  var Mn = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.hasError = false;
    }
    markAsError() {
      this.hasError = true;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + xa.length;
    }
    write(t) {
      let r = new Le(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(xa).write(this.value);
    }
  };
  var z = class e extends nt {
    constructor() {
      super(...arguments);
      this.fields = {};
      this.suggestions = [];
    }
    addField(r) {
      this.fields[r.name] = r;
    }
    addSuggestion(r) {
      this.suggestions.push(r);
    }
    getField(r) {
      return this.fields[r];
    }
    getDeepField(r) {
      let [n, ...i] = r, o = this.getField(n);
      if (!o)
        return;
      let s = o;
      for (let a of i) {
        let l;
        if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Vt && (l = s.value.getField(Number(a))), !l)
          return;
        s = l;
      }
      return s;
    }
    getDeepFieldValue(r) {
      return r.length === 0 ? this : this.getDeepField(r)?.value;
    }
    hasField(r) {
      return !!this.getField(r);
    }
    removeAllFields() {
      this.fields = {};
    }
    removeField(r) {
      delete this.fields[r];
    }
    getFields() {
      return this.fields;
    }
    isEmpty() {
      return Object.keys(this.fields).length === 0;
    }
    getFieldValue(r) {
      return this.getField(r)?.value;
    }
    getDeepSubSelectionValue(r) {
      let n = this;
      for (let i of r) {
        if (!(n instanceof e))
          return;
        let o = n.getSubSelectionValue(i);
        if (!o)
          return;
        n = o;
      }
      return n;
    }
    getDeepSelectionParent(r) {
      let n = this.getSelectionParent();
      if (!n)
        return;
      let i = n;
      for (let o of r) {
        let s = i.value.getFieldValue(o);
        if (!s || !(s instanceof e))
          return;
        let a = s.getSelectionParent();
        if (!a)
          return;
        i = a;
      }
      return i;
    }
    getSelectionParent() {
      let r = this.getField("select");
      if (r?.value instanceof e)
        return { kind: "select", value: r.value };
      let n = this.getField("include");
      if (n?.value instanceof e)
        return { kind: "include", value: n.value };
    }
    getSubSelectionValue(r) {
      return this.getSelectionParent()?.value.fields[r].value;
    }
    getPrintWidth() {
      let r = Object.values(this.fields);
      return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
    }
    write(r) {
      let n = Object.values(this.fields);
      if (n.length === 0 && this.suggestions.length === 0) {
        this.writeEmpty(r);
        return;
      }
      this.writeWithContents(r, n);
    }
    writeEmpty(r) {
      let n = new Le("{}");
      this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
    }
    writeWithContents(r, n) {
      r.writeLine("{").withIndent(() => {
        r.writeJoined(Bt, [...n, ...this.suggestions]).newLine();
      }), r.write("}"), this.hasError && r.afterNextNewline(() => {
        r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
      });
    }
  };
  var Y = class extends nt {
    constructor(r) {
      super();
      this.text = r;
    }
    getPrintWidth() {
      return this.text.length;
    }
    write(r) {
      let n = new Le(this.text);
      this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
    }
  };
  var ao = class {
    constructor(t) {
      this.errorMessages = [];
      this.arguments = t;
    }
    write(t) {
      t.write(this.arguments);
    }
    addErrorMessage(t) {
      this.errorMessages.push(t);
    }
    renderAllMessages(t) {
      return this.errorMessages.map((r) => r(t)).join(`
`);
    }
  };
  var br = "<unknown>";
  var Qp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var Gp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var Hp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var zp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
  var Yp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var Xp = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
  var td = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var lo = class {
    getLocation() {
      return null;
    }
  };
  var uo = class {
    constructor() {
      this._error = new Error;
    }
    getLocation() {
      let t = this._error.stack;
      if (!t)
        return null;
      let n = va(t).find((i) => {
        if (!i.file)
          return false;
        let o = $i(i.file);
        return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
      });
      return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
    }
  };
  var Ta = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
  var Sa = (e) => Array.isArray(e) ? e : e.split(".");
  var co = (e, t) => Sa(t).reduce((r, n) => r && r[n], e);
  var Ia = (e, t, r) => Sa(t).reduceRight((n, i, o, s) => Object.assign({}, co(e, s.slice(0, o)), { [i]: n }), r);
  var La = D(qi());
  var Na = D(import.meta.require("fs"));
  var Da = { keyword: We, entity: We, value: (e) => de(Rt(e)), punctuation: Rt, directive: We, function: We, variable: (e) => de(Rt(e)), string: (e) => de(pt(e)), boolean: Re, number: We, comment: Yr };
  var dd = (e) => e;
  var Dn = {};
  var md = 0;
  var C = { manual: Dn.Prism && Dn.Prism.manual, disableWorkerMessageHandler: Dn.Prism && Dn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
    if (e instanceof Ae) {
      let t = e;
      return new Ae(t.type, C.util.encode(t.content), t.alias);
    } else
      return Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
  }, type: function(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
  }, objId: function(e) {
    return e.__id || Object.defineProperty(e, "__id", { value: ++md }), e.__id;
  }, clone: function e(t, r) {
    let n, i, o = C.util.type(t);
    switch (r = r || {}, o) {
      case "Object":
        if (i = C.util.objId(t), r[i])
          return r[i];
        n = {}, r[i] = n;
        for (let s in t)
          t.hasOwnProperty(s) && (n[s] = e(t[s], r));
        return n;
      case "Array":
        return i = C.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
          n[a] = e(s, r);
        }), n);
      default:
        return t;
    }
  } }, languages: { extend: function(e, t) {
    let r = C.util.clone(C.languages[e]);
    for (let n in t)
      r[n] = t[n];
    return r;
  }, insertBefore: function(e, t, r, n) {
    n = n || C.languages;
    let i = n[e], o = {};
    for (let a in i)
      if (i.hasOwnProperty(a)) {
        if (a == t)
          for (let l in r)
            r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
    let s = n[e];
    return n[e] = o, C.languages.DFS(C.languages, function(a, l) {
      l === s && a != e && (this[a] = o);
    }), o;
  }, DFS: function e(t, r, n, i) {
    i = i || {};
    let o = C.util.objId;
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        r.call(t, s, t[s], n || s);
        let a = t[s], l = C.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
  } }, plugins: {}, highlight: function(e, t, r) {
    let n = { code: e, grammar: t, language: r };
    return C.hooks.run("before-tokenize", n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run("after-tokenize", n), Ae.stringify(C.util.encode(n.tokens), n.language);
  }, matchGrammar: function(e, t, r, n, i, o, s) {
    for (let g in r) {
      if (!r.hasOwnProperty(g) || !r[g])
        continue;
      if (g == s)
        return;
      let _ = r[g];
      _ = C.util.type(_) === "Array" ? _ : [_];
      for (let A = 0;A < _.length; ++A) {
        let R = _[A], E = R.inside, S = !!R.lookbehind, we = !!R.greedy, X = 0, ut = R.alias;
        if (we && !R.pattern.global) {
          let K = R.pattern.toString().match(/[imuy]*$/)[0];
          R.pattern = RegExp(R.pattern.source, K + "g");
        }
        R = R.pattern || R;
        for (let K = n, ie = i;K < t.length; ie += t[K].length, ++K) {
          let je = t[K];
          if (t.length > e.length)
            return;
          if (je instanceof Ae)
            continue;
          if (we && K != t.length - 1) {
            R.lastIndex = ie;
            var p = R.exec(e);
            if (!p)
              break;
            var c = p.index + (S ? p[1].length : 0), d = p.index + p[0].length, a = K, l = ie;
            for (let N = t.length;a < N && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
              l += t[a].length, c >= l && (++K, ie = l);
            if (t[K] instanceof Ae)
              continue;
            u = a - K, je = e.slice(ie, l), p.index -= ie;
          } else {
            R.lastIndex = 0;
            var p = R.exec(je), u = 1;
          }
          if (!p) {
            if (o)
              break;
            continue;
          }
          S && (X = p[1] ? p[1].length : 0);
          var c = p.index + X, p = p[0].slice(X), d = c + p.length, f = je.slice(0, c), h = je.slice(d);
          let oe = [K, u];
          f && (++K, ie += f.length, oe.push(f));
          let vt = new Ae(g, E ? C.tokenize(p, E) : p, ut, p, we);
          if (oe.push(vt), h && oe.push(h), Array.prototype.splice.apply(t, oe), u != 1 && C.matchGrammar(e, t, r, K, ie, true, g), o)
            break;
        }
      }
    }
  }, tokenize: function(e, t) {
    let r = [e], n = t.rest;
    if (n) {
      for (let i in n)
        t[i] = n[i];
      delete t.rest;
    }
    return C.matchGrammar(e, r, t, 0, 0, false), r;
  }, hooks: { all: {}, add: function(e, t) {
    let r = C.hooks.all;
    r[e] = r[e] || [], r[e].push(t);
  }, run: function(e, t) {
    let r = C.hooks.all[e];
    if (!(!r || !r.length))
      for (var n = 0, i;i = r[n++]; )
        i(t);
  } }, Token: Ae };
  C.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
  C.languages.javascript = C.languages.extend("clike", { "class-name": [C.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
  C.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  C.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: C.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: C.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: C.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: C.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
  C.languages.markup && C.languages.markup.tag.addInlined("script", "javascript");
  C.languages.js = C.languages.javascript;
  C.languages.typescript = C.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
  C.languages.ts = C.languages.typescript;
  Ae.stringify = function(e, t) {
    return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
      return Ae.stringify(r, t);
    }).join("") : fd(e.type)(e.content);
  };
  var Fa = D(js());
  var kn = class e {
    static read(t) {
      let r;
      try {
        typeof $fs < "u" ? r = $fs.readFileSync(t, "utf-8") : r = Na.default.readFileSync(t, "utf-8");
      } catch {
        return null;
      }
      return e.fromContent(r);
    }
    static fromContent(t) {
      let r = t.split(/\r?\n/);
      return new e(1, r);
    }
    constructor(t, r) {
      this.firstLineNumber = t, this.lines = r;
    }
    get lastLineNumber() {
      return this.firstLineNumber + this.lines.length - 1;
    }
    mapLineAt(t, r) {
      if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
        return this;
      let n = t - this.firstLineNumber, i = [...this.lines];
      return i[n] = r(i[n]), new e(this.firstLineNumber, i);
    }
    mapLines(t) {
      return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
    }
    lineAt(t) {
      return this.lines[t - this.firstLineNumber];
    }
    prependSymbolAt(t, r) {
      return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
    }
    slice(t, r) {
      let n = this.lines.slice(t - 1, r).join(`
`);
      return new e(t, Oa(n).split(`
`));
    }
    highlight() {
      let t = ka(this.toString());
      return new e(this.firstLineNumber, t.split(`
`));
    }
    toString() {
      return this.lines.join(`
`);
    }
  };
  var yd = { red: ve, gray: Yr, dim: He, bold: de, underline: ce, highlightSource: (e) => e.highlight() };
  var hd = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
  var Td = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
  var _d = ["aggregate", "count", "groupBy"];
  var fo = Symbol();
  var Qa = (e) => e;
  var Nn = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
      this.computedFieldsCache = new ke;
      this.modelExtensionsCache = new ke;
      this.queryCallbacksCache = new ke;
      this.clientExtensions = lr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      this.batchCallbacks = lr(() => {
        let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
        return r2 ? t2.concat(r2) : t2;
      });
    }
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () => Za(this.previous?.getAllComputedFields(t), this.extension, t));
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = $e(t);
        return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== undefined && (o[t][r] !== undefined && i.push(o[t][r]), o[t].$allOperations !== undefined && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== undefined && (o.$allModels[r] !== undefined && i.push(o.$allModels[r]), o.$allModels.$allOperations !== undefined && i.push(o.$allModels.$allOperations)), o[r] !== undefined && i.push(o[r]), o.$allOperations !== undefined && i.push(o.$allOperations), n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  };
  var Ln = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e;
    }
    static single(t) {
      return new e(new Nn(t));
    }
    isEmpty() {
      return this.head === undefined;
    }
    append(t) {
      return new e(new Nn(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
  var el = $("prisma:client");
  var tl = { Vercel: "vercel", "Netlify CI": "netlify" };
  var Od = "Cloudflare-Workers";
  var Nd = "node";
  var Qt = class {
  };
  var ll = D(import.meta.require("fs"));
  var Pr = D(import.meta.require("path"));
  var $d = $("prisma:client:engines:resolveEnginePath");
  var qd = () => new RegExp("runtime[\\\\/]library\\.m?js$");
  var go = D(Ui());
  var ml = D(zs());
  var Kn = class extends Error {
    constructor(t, r) {
      super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
    }
    get [Symbol.toStringTag]() {
      return this.name;
    }
  };
  var ye = class extends Kn {
    constructor(t, r) {
      super(t, r), this.isRetryable = r.isRetryable ?? true;
    }
  };
  var Gt = class extends ye {
    constructor(r) {
      super("This request must be retried", I(r, true));
      this.name = "ForcedRetryError";
      this.code = "P5001";
    }
  };
  v(Gt, "ForcedRetryError");
  var xt = class extends ye {
    constructor(r, n) {
      super(r, I(n, false));
      this.name = "InvalidDatasourceError";
      this.code = "P6001";
    }
  };
  v(xt, "InvalidDatasourceError");
  var wt = class extends ye {
    constructor(r, n) {
      super(r, I(n, false));
      this.name = "NotImplementedYetError";
      this.code = "P5004";
    }
  };
  v(wt, "NotImplementedYetError");
  var B = class extends ye {
    constructor(t, r) {
      super(t, r), this.response = r.response;
      let n = this.response.headers.get("prisma-request-id");
      if (n) {
        let i = `(The request id was: ${n})`;
        this.message = this.message + " " + i;
      }
    }
  };
  var Et = class extends B {
    constructor(r) {
      super("Schema needs to be uploaded", I(r, true));
      this.name = "SchemaMissingError";
      this.code = "P5005";
    }
  };
  v(Et, "SchemaMissingError");
  var yo = "This request could not be understood by the server";
  var vr = class extends B {
    constructor(r, n, i) {
      super(n || yo, I(r, false));
      this.name = "BadRequestError";
      this.code = "P5000";
      i && (this.code = i);
    }
  };
  v(vr, "BadRequestError");
  var Tr = class extends B {
    constructor(r, n) {
      super("Engine not started: healthcheck timeout", I(r, true));
      this.name = "HealthcheckTimeoutError";
      this.code = "P5013";
      this.logs = n;
    }
  };
  v(Tr, "HealthcheckTimeoutError");
  var _r = class extends B {
    constructor(r, n, i) {
      super(n, I(r, true));
      this.name = "EngineStartupError";
      this.code = "P5014";
      this.logs = i;
    }
  };
  v(_r, "EngineStartupError");
  var Cr = class extends B {
    constructor(r) {
      super("Engine version is not supported", I(r, false));
      this.name = "EngineVersionNotSupportedError";
      this.code = "P5012";
    }
  };
  v(Cr, "EngineVersionNotSupportedError");
  var ho = "Request timed out";
  var Ar = class extends B {
    constructor(r, n = ho) {
      super(n, I(r, false));
      this.name = "GatewayTimeoutError";
      this.code = "P5009";
    }
  };
  v(Ar, "GatewayTimeoutError");
  var Bd = "Interactive transaction error";
  var Rr = class extends B {
    constructor(r, n = Bd) {
      super(n, I(r, false));
      this.name = "InteractiveTransactionError";
      this.code = "P5015";
    }
  };
  v(Rr, "InteractiveTransactionError");
  var Vd = "Request parameters are invalid";
  var Mr = class extends B {
    constructor(r, n = Vd) {
      super(n, I(r, false));
      this.name = "InvalidRequestError";
      this.code = "P5011";
    }
  };
  v(Mr, "InvalidRequestError");
  var bo = "Requested resource does not exist";
  var Sr = class extends B {
    constructor(r, n = bo) {
      super(n, I(r, false));
      this.name = "NotFoundError";
      this.code = "P5003";
    }
  };
  v(Sr, "NotFoundError");
  var xo = "Unknown server error";
  var Jt = class extends B {
    constructor(r, n, i) {
      super(n || xo, I(r, true));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = i;
    }
  };
  v(Jt, "ServerError");
  var wo = "Unauthorized, check your connection string";
  var Ir = class extends B {
    constructor(r, n = wo) {
      super(n, I(r, false));
      this.name = "UnauthorizedError";
      this.code = "P5007";
    }
  };
  v(Ir, "UnauthorizedError");
  var Eo = "Usage exceeded, retry again later";
  var Dr = class extends B {
    constructor(r, n = Eo) {
      super(n, I(r, true));
      this.name = "UsageExceededError";
      this.code = "P5008";
    }
  };
  v(Dr, "UsageExceededError");
  var xl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.9.0-32.23fdc5965b1e05fc54e5f26ed3de66776b93de64", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
  var Fr = class extends ye {
    constructor(r, n) {
      super(`Cannot fetch data from service:
${r}`, I(n, true));
      this.name = "RequestError";
      this.code = "P5010";
    }
  };
  v(Fr, "RequestError");
  var Wd = typeof import.meta.require < "u" ? import.meta.require : () => {
  };
  var vo = class {
    constructor(t = {}) {
      this.headers = new Map;
      for (let [r, n] of Object.entries(t))
        if (typeof n == "string")
          this.headers.set(r, n);
        else if (Array.isArray(n))
          for (let i of n)
            this.headers.set(r, i);
    }
    append(t, r) {
      this.headers.set(t, r);
    }
    delete(t) {
      this.headers.delete(t);
    }
    get(t) {
      return this.headers.get(t) ?? null;
    }
    has(t) {
      return this.headers.has(t);
    }
    set(t, r) {
      this.headers.set(t, r);
    }
    forEach(t, r) {
      for (let [n, i] of this.headers)
        t.call(r, i, n, this);
    }
  };
  var zd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
  var wl = $("prisma:client:dataproxyEngine");
  var Pl = 3;
  var To = $("prisma:client:dataproxyEngine");
  var _o = class {
    constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
      this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
      this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
    }
  };
  var Or = class extends Qt {
    constructor(t) {
      super(), hl(t), this.config = t, this.env = { ...this.config.env, ...process.env }, this.inlineSchema = t.inlineSchema, this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = this.config.tracingHelper;
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== undefined && await this.startPromise, this.startPromise = (async () => {
        let [t, r] = this.extractHostAndApiKey();
        this.host = t, this.headerBuilder = new _o({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await El(t, this.config), To("host", this.host);
      })(), await this.startPromise;
    }
    async stop() {
    }
    propagateResponseExtensions(t) {
      t?.logs?.length && t.logs.forEach((r) => {
        switch (r.level) {
          case "debug":
          case "error":
          case "trace":
          case "warn":
          case "info":
            break;
          case "query": {
            let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
            if (!this.tracingHelper.isEnabled()) {
              let [i] = n.split("/* traceparent");
              n = i;
            }
            this.logEmitter.emit("query", { query: n, timestamp: bl(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
          }
        }
      }), t?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t.traces });
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the remote query engine');
    }
    async url(t) {
      return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: true };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await Pt(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
        r.ok || To("schema response status", r.status);
        let n = await kr(r, this.clientVersion);
        if (n)
          throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: new Date, target: "" }), n;
        this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: new Date, target: "" });
      });
    }
    request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
      return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
    }
    async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
      let o = n?.kind === "itx" ? n.options : undefined, s = Vn(t, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
      return a.map((u) => ("errors" in u) && u.errors.length > 0 ? Er(u.errors[0], this.clientVersion) : { data: u, elapsed: l });
    }
    requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
      return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
        let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
        o(s);
        let a = await Pt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
        a.ok || To("graphql response status", a.status), await this.handleError(await kr(a, this.clientVersion));
        let l = await a.json(), u = l.extensions;
        if (u && this.propagateResponseExtensions(u), l.errors)
          throw l.errors.length === 1 ? Er(l.errors[0], this.config.clientVersion) : new W(l.errors, { clientVersion: this.config.clientVersion });
        return l;
      } });
    }
    async transaction(t, r, n) {
      let i = { start: "starting", commit: "committing", rollback: "rolling back" };
      return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: async ({ logHttpCall: o }) => {
        if (t === "start") {
          let s = JSON.stringify({ max_wait: n?.maxWait ?? 2000, timeout: n?.timeout ?? 5000, isolation_level: n?.isolationLevel }), a = await this.url("transaction/start");
          o(a);
          let l = await Pt(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
          await this.handleError(await kr(l, this.clientVersion));
          let u = await l.json(), c = u.extensions;
          c && this.propagateResponseExtensions(c);
          let p = u.id, d = u["data-proxy"].endpoint;
          return { id: p, payload: { endpoint: d } };
        } else {
          let s = `${n.payload.endpoint}/${t}`;
          o(s);
          let a = await Pt(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
          await this.handleError(await kr(a, this.clientVersion));
          let u = (await a.json()).extensions;
          u && this.propagateResponseExtensions(u);
          return;
        }
      } });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Un({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
      try {
        i = new URL(n);
      } catch {
        throw new xt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:")
        throw new xt(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new xt(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
      return [s, l];
    }
    metrics() {
      throw new wt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
    }
    async withRetry(t) {
      for (let r = 0;; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: new Date, target: "" });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof ye) || !i.isRetryable)
            throw i;
          if (r >= Pl)
            throw i instanceof Gt ? i.cause : i;
          this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Pl} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: new Date, target: "" });
          let o = await yl(r);
          this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: new Date, target: "" });
        }
      }
    }
    async handleError(t) {
      if (t instanceof Et)
        throw await this.uploadSchema(), new Gt({ clientVersion: this.clientVersion, cause: t });
      if (t)
        throw t;
    }
  };
  var Ao = D(import.meta.require("os"));
  var Tl = D(import.meta.require("path"));
  var Co = Symbol("PrismaLibraryEngineCache");
  var _l = { async loadLibrary(e) {
    let t = await Si(), r = await ul("library", e);
    try {
      return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => em(r));
    } catch (n) {
      let i = Li({ e: n, platformInfo: t, id: r });
      throw new O(i, e.clientVersion);
    }
  } };
  var So = {};
  Tt(So, { QueryEngine: () => Lr, __wbg_String_88810dfeb4021902: () => Wm, __wbg_buffer_344d9b41efe96da7: () => Ym, __wbg_call_53fc3abd42e24ec8: () => Af, __wbg_call_669127b9d730c650: () => mf, __wbg_crypto_58f13aa23ffcb166: () => of, __wbg_done_bc26bf4ada718266: () => hf, __wbg_entries_6d727b73ee02b7ce: () => Nf, __wbg_from_422023050439b190: () => ef, __wbg_getRandomValues_504510b5564925af: () => nf, __wbg_getTime_ed6ee333b702f8fc: () => Pm, __wbg_get_2aff440840bb6202: () => wf, __wbg_get_4a9aa5157afeb382: () => ff, __wbg_get_94990005bd6ca07c: () => Hm, __wbg_getwithrefkey_5e6d9547403deab8: () => Gm, __wbg_globalThis_17eff828815f7d84: () => vf, __wbg_global_46f939f6541643c5: () => Tf, __wbg_has_cdf8b85f6e903c80: () => xm, __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Of, __wbg_instanceof_Promise_cfbcc42300367513: () => Rm, __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => Ff, __wbg_isArray_38525be7442aa21e: () => Cf, __wbg_isSafeInteger_c38b0a16d0c7cef7: () => Rf, __wbg_iterator_7ee1a391d310f8e4: () => Mm, __wbg_length_a5587d6cd79ab197: () => Df, __wbg_length_cace2e0b3ddc0502: () => Sm, __wbg_msCrypto_abcb1295e768d1f2: () => cf, __wbg_new0_ad75dd38f92424e2: () => Em, __wbg_new_08236689f0afb357: () => qm, __wbg_new_1b94180eeb48f2a2: () => Bm, __wbg_new_c728d68b8b34487e: () => Vm, __wbg_new_d8a000788389a31e: () => Xm, __wbg_new_feb65b865d980ae2: () => fm, __wbg_newnoargs_ccdcae30fd002262: () => _f, __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => Zm, __wbg_newwithlength_13b5319ab422dcf6: () => pf, __wbg_next_15da6a3df9290720: () => xf, __wbg_next_1989a20442400aaa: () => yf, __wbg_node_523d7bd03ef69fba: () => lf, __wbg_now_4579335d3581594c: () => _m, __wbg_now_8ed1a4454e40ecd1: () => Tm, __wbg_parse_3f0cb48976ca4123: () => wm, __wbg_process_5b786e71d465a513: () => sf, __wbg_push_fd3233d09cf81821: () => Jm, __wbg_randomFillSync_a0d98aa11c81fe89: () => tf, __wbg_require_2784e593a4674877: () => uf, __wbg_resolve_a3252b2860f0a09e: () => Uf, __wbg_self_3fad056edded10bd: () => Ef, __wbg_setTimeout_631fe61f31fa2fad: () => gm, __wbg_set_0ac78a2bc07da03c: () => jm, __wbg_set_3355b9f2d3092e3b: () => Qm, __wbg_set_40f7786a25a9cc7e: () => Mf, __wbg_set_841ac57cff3d672b: () => Km, __wbg_set_dcfd613a3420f908: () => If, __wbg_set_wasm: () => Mo, __wbg_static_accessor_PERFORMANCE_1a325848eb3ce65a: () => Cm, __wbg_stringify_4039297315a25b00: () => Sf, __wbg_subarray_6ca5cfa7fbb9abbe: () => rf, __wbg_then_1bbc9edafd859b06: () => Vf, __wbg_then_89e1c559530b85cf: () => Bf, __wbg_valueOf_ff4b62641803432a: () => gf, __wbg_value_0570714ff7d75f35: () => bf, __wbg_versions_c2ab80650590b6a2: () => af, __wbg_window_a4f46c98a61d4089: () => Pf, __wbindgen_bigint_from_i64: () => Fm, __wbindgen_bigint_from_u64: () => Nm, __wbindgen_bigint_get_as_i64: () => Lf, __wbindgen_boolean_get: () => Im, __wbindgen_cb_drop: () => jf, __wbindgen_closure_wrapper7401: () => Kf, __wbindgen_debug_string: () => $f, __wbindgen_error_new: () => mm, __wbindgen_in: () => Om, __wbindgen_is_bigint: () => Dm, __wbindgen_is_function: () => df, __wbindgen_is_object: () => Am, __wbindgen_is_string: () => Um, __wbindgen_is_undefined: () => bm, __wbindgen_jsval_eq: () => Lm, __wbindgen_jsval_loose_eq: () => kf, __wbindgen_memory: () => zm, __wbindgen_number_get: () => km, __wbindgen_number_new: () => $m, __wbindgen_object_clone_ref: () => hm, __wbindgen_object_drop_ref: () => vm, __wbindgen_string_get: () => dm, __wbindgen_string_new: () => ym, __wbindgen_throw: () => qf, debug_panic: () => cm, getBuildTimeInfo: () => um });
  var b2;
  var Ke = new Array(128).fill(undefined);
  Ke.push(undefined, null, true, false);
  var Z = 0;
  var Qn = null;
  var tm = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  var zn = new tm("utf-8");
  var rm = typeof zn.encodeInto == "function" ? function(e, t) {
    return zn.encodeInto(e, t);
  } : function(e, t) {
    let r = zn.encode(e);
    return t.set(r), { read: e.length, written: r.length };
  };
  var Gn = null;
  var nm = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  var Cl = new nm("utf-8", { ignoreBOM: true, fatal: true });
  Cl.decode();
  var Nr = Ke.length;
  var Jn = null;
  var Hn = null;
  var Lr = class {
    __destroy_into_raw() {
      let t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      let t = this.__destroy_into_raw();
      b2.__wbg_queryengine_free(t);
    }
    constructor(t, r, n) {
      try {
        let a = b2.__wbindgen_add_to_stack_pointer(-16);
        b2.queryengine_new(a, w(t), w(r), w(n));
        var i = xe()[a / 4 + 0], o = xe()[a / 4 + 1], s = xe()[a / 4 + 2];
        if (s)
          throw ne(o);
        return this.__wbg_ptr = i >>> 0, this;
      } finally {
        b2.__wbindgen_add_to_stack_pointer(16);
      }
    }
    connect(t) {
      let r = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), n = Z, i = b2.queryengine_connect(this.__wbg_ptr, r, n);
      return ne(i);
    }
    disconnect(t) {
      let r = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), n = Z, i = b2.queryengine_disconnect(this.__wbg_ptr, r, n);
      return ne(i);
    }
    query(t, r, n) {
      let i = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), o = Z, s = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), a = Z;
      var l = at(n) ? 0 : le(n, b2.__wbindgen_malloc, b2.__wbindgen_realloc), u = Z;
      let c = b2.queryengine_query(this.__wbg_ptr, i, o, s, a, l, u);
      return ne(c);
    }
    startTransaction(t, r) {
      let n = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), i = Z, o = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), s = Z, a = b2.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
      return ne(a);
    }
    commitTransaction(t, r) {
      let n = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), i = Z, o = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), s = Z, a = b2.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
      return ne(a);
    }
    rollbackTransaction(t, r) {
      let n = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), i = Z, o = le(r, b2.__wbindgen_malloc, b2.__wbindgen_realloc), s = Z, a = b2.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
      return ne(a);
    }
    metrics(t) {
      let r = le(t, b2.__wbindgen_malloc, b2.__wbindgen_realloc), n = Z, i = b2.queryengine_metrics(this.__wbg_ptr, r, n);
      return ne(i);
    }
  };
  var Io;
  var Al = { async loadLibrary(e) {
    let { clientVersion: t, adapter: r } = e;
    if (r === undefined)
      throw new O(`The \`adapter\` option for \`PrismaClient\` is required in this context (${$n()})`, t);
    return Io === undefined && (Io = (async () => {
      let n = await e.getQueryEngineWasmModule?.();
      if (n == null)
        throw new O("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t);
      let i = { "./query_engine_bg.js": So }, o = new WebAssembly.Instance(n, i);
      Mo(o.exports);
    })()), await Io, { debugPanic() {
      return Promise.reject("{}");
    }, dmmf() {
      return Promise.resolve("{}");
    }, version() {
      return { commit: "unknown", version: "unknown" };
    }, QueryEngine: Lr };
  } };
  var Qf = "P2036";
  var qe = $("prisma:client:libraryEngine");
  var Rl = [...Pi, "native"];
  var Ml = 0;
  var qr = class extends Qt {
    constructor(t, r) {
      super(), this.libraryLoader = r ?? _l, t.getQueryEngineWasmModule !== undefined && (this.libraryLoader = r ?? Al), this.config = t, this.libraryStarted = false, this.logQueries = t.logQueries ?? false, this.logLevel = t.logLevel ?? "error", this.logEmitter = t.logEmitter, this.datamodel = atob(t.inlineSchema), t.enableDebugLogs && (this.logLevel = "debug");
      let n = Object.keys(t.overrideDatasources)[0], i = t.overrideDatasources[n]?.url;
      n !== undefined && i !== undefined && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
    }
    checkForTooManyEngines() {
      Ml === 10 && console.warn(`${Re("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
    }
    async transaction(t, r, n) {
      await this.start();
      let i = JSON.stringify(r), o;
      if (t === "start") {
        let a = JSON.stringify({ max_wait: n?.maxWait ?? 2000, timeout: n?.timeout ?? 5000, isolation_level: n?.isolationLevel });
        o = await this.engine?.startTransaction(a, i);
      } else
        t === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
      let s = this.parseEngineResponse(o);
      if (Hf(s)) {
        let a = this.getExternalAdapterError(s);
        throw a ? a.error : new H(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
      }
      return s;
    }
    async instantiateLibrary() {
      if (qe("internalSetup"), this.libraryInstantiationPromise)
        return this.libraryInstantiationPromise;
      Ei(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
    }
    async getCurrentBinaryTarget() {
      {
        if (this.binaryTarget)
          return this.binaryTarget;
        let t = await ft();
        if (!Rl.includes(t))
          throw new O(`Unknown ${ve("PRISMA_QUERY_ENGINE_LIBRARY")} ${ve(de(t))}. Possible binaryTargets: ${pt(Rl.join(", "))} or a path to the query engine library.
You may have to run ${pt("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
        return t;
      }
    }
    parseEngineResponse(t) {
      if (!t)
        throw new W("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
      try {
        return JSON.parse(t);
      } catch {
        throw new W("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
      }
    }
    async loadEngine() {
      if (!this.engine) {
        this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
        try {
          let t = new WeakRef(this), { adapter: r } = this.config;
          r && qe("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
            t.deref()?.logger(n);
          }, r), Ml++;
        } catch (t) {
          let r = t, n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new O(n.message, this.config.clientVersion, n.error_code);
        }
      }
    }
    logger(t) {
      let r = this.parseEngineResponse(t);
      if (r) {
        if ("span" in r) {
          this.config.tracingHelper.createEngineSpan(r);
          return;
        }
        r.level = r?.level.toLowerCase() ?? "unknown", Gf(r) ? this.logEmitter.emit("query", { timestamp: new Date, query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : Jf(r) ? this.loggerRustPanic = new be(this.getErrorMessageWithLink(`${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: new Date, message: r.message, target: r.module_path });
      }
    }
    getErrorMessageWithLink(t) {
      return gl({ binaryTarget: this.binaryTarget, title: t, version: this.config.clientVersion, engineVersion: this.versionInfo?.commit, database: this.config.activeProvider, query: this.lastQuery });
    }
    parseInitError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    parseRequestError(t) {
      try {
        return JSON.parse(t);
      } catch {
      }
      return t;
    }
    onBeforeExit() {
      throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
    }
    async start() {
      if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
        return qe(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
      if (this.libraryStarted)
        return;
      let t = async () => {
        qe("library starting");
        try {
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, qe("library started");
        } catch (r) {
          let n = this.parseInitError(r.message);
          throw typeof n == "string" ? r : new O(n.message, this.config.clientVersion, n.error_code);
        } finally {
          this.libraryStartingPromise = undefined;
        }
      };
      return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t), this.libraryStartingPromise;
    }
    async stop() {
      if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
        return qe("library is already stopping"), this.libraryStoppingPromise;
      if (!this.libraryStarted)
        return;
      let t = async () => {
        await new Promise((n) => setTimeout(n, 5)), qe("library stopping");
        let r = { traceparent: this.config.tracingHelper.getTraceParent() };
        await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = undefined, qe("library stopped");
      };
      return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t), this.libraryStoppingPromise;
    }
    version() {
      return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
    }
    debugPanic(t) {
      return this.library?.debugPanic(t);
    }
    async request(t, { traceparent: r, interactiveTransaction: n }) {
      qe(`sending request, this.libraryStarted: ${this.libraryStarted}`);
      let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t);
      try {
        await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
        let s = this.parseEngineResponse(await this.executingQueryPromise);
        if (s.errors)
          throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new W(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        if (this.loggerRustPanic)
          throw this.loggerRustPanic;
        return { data: s, elapsed: 0 };
      } catch (s) {
        if (s instanceof O)
          throw s;
        if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:"))
          throw new be(this.getErrorMessageWithLink(s.message), this.config.clientVersion);
        let a = this.parseRequestError(s.message);
        throw typeof a == "string" ? s : new W(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
      }
    }
    async requestBatch(t, { transaction: r, traceparent: n }) {
      qe("requestBatch");
      let i = Vn(t, r);
      await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), vl(r));
      let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
      if (s.errors)
        throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new W(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
      let { batchResult: a, errors: l } = s;
      if (Array.isArray(a))
        return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
      throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
    }
    buildQueryError(t) {
      if (t.user_facing_error.is_panic)
        return new be(this.getErrorMessageWithLink(t.user_facing_error.message), this.config.clientVersion);
      let r = this.getExternalAdapterError(t.user_facing_error);
      return r ? r.error : Er(t, this.config.clientVersion);
    }
    getExternalAdapterError(t) {
      if (t.error_code === Qf && this.config.adapter) {
        let r = t.meta?.id;
        pn(typeof r == "number", "Malformed external JS error received from the engine");
        let n = this.config.adapter.errorRegistry.consumeError(r);
        return pn(n, "External error with reported id was not registered"), n;
      }
    }
    async metrics(t) {
      await this.start();
      let r = await this.engine.metrics(JSON.stringify(t));
      return t.format === "prometheus" ? r : this.parseEngineResponse(r);
    }
  };
  var Nl = D(Do());
  var Qe = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
      this.isRequired = false;
    }
    makeRequired() {
      return this.isRequired = true, this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
    }
  };
  var Xn = class {
    constructor() {
      this.fields = [];
    }
    addField(t, r) {
      return this.fields.push({ write(n) {
        let { green: i, dim: o } = n.context.colors;
        n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
      } }), this;
    }
    write(t) {
      let { colors: { green: r } } = t.context;
      t.writeLine(r("{")).withIndent(() => {
        t.writeJoined(Bt, this.fields).newLine();
      }).write(r("}")).addMarginSymbol(r("+"));
    }
  };
  var pg = 3;
  var mg = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
  var ko = class e {
    constructor(t) {
      this.params = t;
      this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
    }
    throwValidationError(t) {
      ri({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
    }
    getSelectionPath() {
      return this.params.selectionPath;
    }
    getArgumentPath() {
      return this.params.argumentPath;
    }
    getArgumentName() {
      return this.params.argumentPath[this.params.argumentPath.length - 1];
    }
    getOutputTypeDescription() {
      if (!(!this.params.modelName || !this.model))
        return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
    }
    isRawAction() {
      return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
    }
    getComputedFields() {
      if (this.params.modelName)
        return this.params.extensions.getAllComputedFields(this.params.modelName);
    }
    findField(t) {
      return this.model?.fields.find((r) => r.name === t);
    }
    nestSelection(t) {
      let r = this.findField(t), n = r?.kind === "object" ? r.type : undefined;
      return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
    }
    nestArgument(t) {
      return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
    }
  };
  var Kl = (e) => ({ command: e });
  var Ql = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
  var vg = /^(\s*alter\s)/i;
  var Wl = $("prisma:client");
  var No = ({ clientMethod: e, activeProvider: t }) => (r) => {
    let n = "", i;
    if (Array.isArray(r)) {
      let [o, ...s] = r;
      n = o, i = { values: Br(s || []), __prismaRawParameters__: true };
    } else
      switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: Br(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: Br(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = Ql(r), i = { values: Br(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
    return i?.values ? Wl(`prisma.${e}(${n}, ${i.values})`) : Wl(`prisma.${e}(${n})`), { query: n, parameters: i };
  };
  var zl = { requestArgsToMiddlewareArgs(e) {
    return [e.strings, ...e.values];
  }, middlewareArgsToRequestArgs(e) {
    let [t, ...r] = e;
    return new fe(t, r);
  } };
  var Yl = { requestArgsToMiddlewareArgs(e) {
    return [e];
  }, middlewareArgsToRequestArgs(e) {
    return e[0];
  } };
  var Xl = { isEnabled() {
    return false;
  }, getTraceParent() {
    return "00-10-10-00";
  }, async createEngineSpan() {
  }, getActiveContext() {
  }, runInChildSpan(e, t) {
    return t();
  } };
  var $o = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    createEngineSpan(t) {
      return this.getGlobalTracingHelper().createEngineSpan(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Xl;
    }
  };
  var ni = class {
    constructor() {
      this._middlewares = [];
    }
    use(t) {
      this._middlewares.push(t);
    }
    get(t) {
      return this._middlewares[t];
    }
    has(t) {
      return !!this._middlewares[t];
    }
    length() {
      return this._middlewares.length;
    }
  };
  var iu = D(Ui());
  var Cg = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
  var si = class {
    constructor(t) {
      this.options = t;
      this.tickActive = false;
      this.batches = {};
    }
    request(t) {
      let r = this.options.batchBy(t);
      return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
        this.dispatchBatches(), this.tickActive = false;
      }))), new Promise((n, i) => {
        this.batches[r].push({ request: t, resolve: n, reject: i });
      })) : this.options.singleLoader(t);
    }
    dispatchBatches() {
      for (let t in this.batches) {
        let r = this.batches[t];
        delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
          n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
        }).catch((n) => {
          r[0].reject(n);
        }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
          if (n instanceof Error)
            for (let i = 0;i < r.length; i++)
              r[i].reject(n);
          else
            for (let i = 0;i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
        }).catch((n) => {
          for (let i = 0;i < r.length; i++)
            r[i].reject(n);
        }));
      }
    }
    get [Symbol.toStringTag]() {
      return "DataLoader";
    }
  };
  var Ag = $("prisma:client:request_handler");
  var ai = class {
    constructor(t, r) {
      this.logEmitter = r, this.client = t, this.dataloader = new si({ batchLoader: Ha(async ({ requests: n, customDataProxyFetch: i }) => {
        let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => jo(p.protocolQuery.action));
        return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Rg(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
          if (p instanceof Error)
            return p;
          try {
            return this.mapQueryEngineResult(n[d], p);
          } catch (f) {
            return f;
          }
        });
      }), singleLoader: async (n) => {
        let i = n.transaction?.kind === "itx" ? ou(n.transaction) : undefined, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: jo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
        return this.mapQueryEngineResult(n, o);
      }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : nu(n.protocolQuery), batchOrder(n, i) {
        return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
      } });
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
        this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
      return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: new Date }), r;
      }
    }
    handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s }) {
      if (Ag(t), Mg(t, i) || t instanceof Ve)
        throw t;
      if (t instanceof H && Sg(t)) {
        let l = su(t.meta);
        ri({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
      }
      let a = t.message;
      if (n && (a = Kt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), t.code) {
        let l = s ? { modelName: s, ...t.meta } : t.meta;
        throw new H(a, { code: t.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: t.batchRequestIdx });
      } else {
        if (t.isPanic)
          throw new be(a, this.client._clientVersion);
        if (t instanceof W)
          throw new W(a, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
        if (t instanceof O)
          throw new O(a, this.client._clientVersion);
        if (t instanceof be)
          throw new be(a, this.client._clientVersion);
      }
      throw t.clientVersion = this.client._clientVersion, t;
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, iu.default)(t) : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t))
        return t;
      let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = oi(co(i, o));
      return n ? n(s) : s;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
  var au = "5.9.1";
  var lu = au;
  var fu = D(Do());
  var U = class extends Error {
    constructor(t) {
      super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientConstructorValidationError";
    }
  };
  v(U, "PrismaClientConstructorValidationError");
  var pu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
  var du = ["pretty", "colorless", "minimal"];
  var mu = ["info", "query", "warn", "error"];
  var Dg = { datasources: (e, { datasourceNames: t }) => {
    if (e) {
      if (typeof e != "object" || Array.isArray(e))
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
      for (let [r, n] of Object.entries(e)) {
        if (!t.includes(r)) {
          let i = Wt(r, t) || ` Available datasources: ${t.join(", ")}`;
          throw new U(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
        }
        if (typeof n != "object" || Array.isArray(n))
          throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
        if (n && typeof n == "object")
          for (let [i, o] of Object.entries(n)) {
            if (i !== "url")
              throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string")
              throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
      }
    }
  }, adapter: (e, t) => {
    if (e === null)
      return;
    if (e === undefined)
      throw new U('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
    if (!Yn(t).includes("driverAdapters"))
      throw new U('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
    if (nr() === "binary")
      throw new U('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
  }, datasourceUrl: (e) => {
    if (typeof e < "u" && typeof e != "string")
      throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
  }, errorFormat: (e) => {
    if (e) {
      if (typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
      if (!du.includes(e)) {
        let t = Wt(e, du);
        throw new U(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
      }
    }
  }, log: (e) => {
    if (!e)
      return;
    if (!Array.isArray(e))
      throw new U(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
    function t(r) {
      if (typeof r == "string" && !mu.includes(r)) {
        let n = Wt(r, mu);
        throw new U(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
      }
    }
    for (let r of e) {
      t(r);
      let n = { level: t, emit: (i) => {
        let o = ["stdout", "event"];
        if (!o.includes(i)) {
          let s = Wt(i, o);
          throw new U(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
        }
      } };
      if (r && typeof r == "object")
        for (let [i, o] of Object.entries(r))
          if (n[i])
            n[i](o);
          else
            throw new U(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
    }
  }, __internal: (e) => {
    if (!e)
      return;
    let t = ["debug", "engine", "configOverride"];
    if (typeof e != "object")
      throw new U(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
    for (let [r] of Object.entries(e))
      if (!t.includes(r)) {
        let n = Wt(r, t);
        throw new U(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
  } };
  var lt = $("prisma:client");
  typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
  var Fg = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
  var Og = Symbol.for("prisma.client.transaction.id");
  var Ng = { id: 0, nextId() {
    return ++this.id;
  } };
  var $g = new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS((exports) => {
  var __dirname = "/home/pitpy/Desktop/trainning/hono-bun-app/node_modules/.prisma/client";
  Object.defineProperty(exports, "__esModule", { value: true });
  var {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
    PrismaClientRustPanicError: PrismaClientRustPanicError2,
    PrismaClientInitializationError: PrismaClientInitializationError2,
    PrismaClientValidationError: PrismaClientValidationError2,
    NotFoundError: NotFoundError2,
    getPrismaClient: getPrismaClient2,
    sqltag: sqltag2,
    empty: empty2,
    join: join2,
    raw: raw3,
    Decimal: Decimal2,
    Debug: Debug2,
    objectEnumValues: objectEnumValues2,
    makeStrictEnum: makeStrictEnum2,
    Extensions: Extensions2,
    warnOnce: warnOnce2,
    defineDmmfProperty: defineDmmfProperty2,
    Public: Public2,
    detectRuntime: detectRuntime2
  } = require_library();
  var Prisma = {};
  exports.Prisma = Prisma;
  exports.$Enums = {};
  Prisma.prismaVersion = {
    client: "5.9.1",
    engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
  };
  Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
  Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
  Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
  Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
  Prisma.PrismaClientValidationError = PrismaClientValidationError2;
  Prisma.NotFoundError = NotFoundError2;
  Prisma.Decimal = Decimal2;
  Prisma.sql = sqltag2;
  Prisma.empty = empty2;
  Prisma.join = join2;
  Prisma.raw = raw3;
  Prisma.validator = Public2.validator;
  Prisma.getExtensionContext = Extensions2.getExtensionContext;
  Prisma.defineExtension = Extensions2.defineExtension;
  Prisma.DbNull = objectEnumValues2.instances.DbNull;
  Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
  Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
  Prisma.NullTypes = {
    DbNull: objectEnumValues2.classes.DbNull,
    JsonNull: objectEnumValues2.classes.JsonNull,
    AnyNull: objectEnumValues2.classes.AnyNull
  };
  var path = import.meta.require("path");
  exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable"
  });
  exports.Prisma.Order_detailsScalarFieldEnum = {
    order_id: "order_id",
    item_id: "item_id",
    item_text: "item_text",
    price: "price"
  };
  exports.Prisma.UserScalarFieldEnum = {
    id: "id",
    name: "name",
    address: "address",
    phone: "phone",
    arr: "arr"
  };
  exports.Prisma.V_usersScalarFieldEnum = {
    id: "id",
    name: "name",
    address: "address",
    phone: "phone",
    arr: "arr"
  };
  exports.Prisma.SortOrder = {
    asc: "asc",
    desc: "desc"
  };
  exports.Prisma.NullableJsonNullValueInput = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull
  };
  exports.Prisma.QueryMode = {
    default: "default",
    insensitive: "insensitive"
  };
  exports.Prisma.JsonNullValueFilter = {
    DbNull: Prisma.DbNull,
    JsonNull: Prisma.JsonNull,
    AnyNull: Prisma.AnyNull
  };
  exports.Prisma.NullsOrder = {
    first: "first",
    last: "last"
  };
  exports.Prisma.ModelName = {
    order_details: "order_details",
    user: "user",
    v_users: "v_users"
  };
  var config2 = {
    generator: {
      name: "client",
      provider: {
        fromEnvVar: null,
        value: "prisma-client-js"
      },
      output: {
        value: "/home/pitpy/Desktop/trainning/bun/node_modules/@prisma/client",
        fromEnvVar: null
      },
      config: {
        engineType: "library"
      },
      binaryTargets: [
        {
          fromEnvVar: null,
          value: "debian-openssl-3.0.x",
          native: true
        }
      ],
      previewFeatures: [
        "views"
      ]
    },
    relativeEnvPaths: {
      rootEnvPath: "../../../.env",
      schemaEnvPath: "../../../.env"
    },
    relativePath: "../../../prisma",
    clientVersion: "5.9.1",
    engineVersion: "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
    datasourceNames: [
      "db"
    ],
    activeProvider: "postgresql",
    postinstall: true,
    inlineDatasources: {
      db: {
        url: {
          fromEnvVar: "DATABASE_URL",
          value: null
        }
      }
    },
    inlineSchema: "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJ2aWV3cyJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIG9yZGVyX2RldGFpbHMgewogIG9yZGVyX2lkICBJbnQgICAgIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBpdGVtX2lkICAgSW50CiAgaXRlbV90ZXh0IFN0cmluZyAgQGRiLlZhckNoYXIKICBwcmljZSAgICAgRGVjaW1hbCBAZGIuRGVjaW1hbCgxMCwgMikKCiAgQEBpZChbb3JkZXJfaWQsIGl0ZW1faWRdKQp9Cgptb2RlbCB1c2VyIHsKICBpZCAgICAgIEludCAgICAgQGlkKG1hcDogIm5ld3RhYmxlX3BrIikgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigxMjApCiAgYWRkcmVzcyBKc29uPyAgIEBkYi5Kc29uCiAgcGhvbmUgICBTdHJpbmc/IEBkYi5WYXJDaGFyKDIwKQogIGFyciAgICAgU3RyaW5nPwoKICBAQG1hcCgidXNlcnMiKQp9Cgp2aWV3IHZfdXNlcnMgewogIGlkICAgICAgSW50ICAgICAgQHVuaXF1ZQogIG5hbWUgICAgU3RyaW5nPyAgQGRiLlZhckNoYXIoMTIwKQogIGFkZHJlc3MgSnNvbj8gICAgQGRiLkpzb24KICBwaG9uZSAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDIwKQogIGFyciAgICAgU3RyaW5nW10KfQo=",
    inlineSchemaHash: "dd471e823b6e91c94fb0f169deeb50103f3287476bfb5ebb9d24cd1d5f042c21",
    noEngine: false
  };
  var fs2 = import.meta.require("fs");
  config2.dirname = __dirname;
  if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
    const alternativePaths = [
      "node_modules/.prisma/client",
      ".prisma/client"
    ];
    const alternativePath = alternativePaths.find((altPath) => {
      return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
    }) ?? alternativePaths[0];
    config2.dirname = path.join(process.cwd(), alternativePath);
    config2.isBundled = true;
  }
  config2.runtimeDataModel = JSON.parse("{\"models\":{\"order_details\":{\"dbName\":null,\"fields\":[{\"name\":\"order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"order_id\",\"item_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"v_users\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arr\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}");
  defineDmmfProperty2(exports.Prisma, config2.runtimeDataModel);
  config2.getQueryEngineWasmModule = undefined;
  var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
  warnEnvConflicts2({
    rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
  });
  var PrismaClient = getPrismaClient2(config2);
  exports.PrismaClient = PrismaClient;
  Object.assign(exports, Prisma);
  path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
  path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-debian-openssl-3.0.x.so.node");
  path.join(__dirname, "schema.prisma");
  path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS((exports, module) => {
  module.exports = { ...require_client() };
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS((exports, module) => {
  module.exports = {
    ...require_default()
  };
});

// node_modules/hono/dist/helper/factory/index.js
var Factory = class {
  constructor() {
    this.createMiddleware = (middleware) => middleware;
  }
  createHandlers(...handlers) {
    return handlers.filter((handler) => handler !== undefined);
  }
};
var createFactory = () => new Factory;
var createMiddleware = (middleware) => createFactory().createMiddleware(middleware);
// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var getPath = (request) => {
  const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
  return match ? match[1] : "";
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ?? (encoded = /[%+]/.test(url));
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ?? (results[name] = value);
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/utils/cookie.js
var _serialize = (name, value, opt = {}) => {
  let cookie = `${name}=${value}`;
  if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
    cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
  }
  if (opt.domain) {
    cookie += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    cookie += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    cookie += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) {
    cookie += "; HttpOnly";
  }
  if (opt.secure) {
    cookie += "; Secure";
  }
  if (opt.sameSite) {
    cookie += `; SameSite=${opt.sameSite}`;
  }
  if (opt.partitioned) {
    cookie += "; Partitioned";
  }
  return cookie;
};
var serialize = (name, value, opt = {}) => {
  value = encodeURIComponent(value);
  return _serialize(name, value, opt);
};

// node_modules/hono/dist/helper/cookie/index.js
var setCookie = (c, name, value, opt) => {
  const cookie2 = serialize(name, value, { path: "/", ...opt });
  c.header("set-cookie", cookie2, { append: true });
};
// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/jsx/constants.js
var DOM_RENDERER = Symbol("RENDERER");
var DOM_ERROR_HANDLER = Symbol("ERROR_HANDLER");
var DOM_STASH = Symbol("STASH");

// node_modules/hono/dist/helper/css/common.js
var PSEUDO_GLOBAL_SELECTOR = ":-hono-global";
var isPseudoGlobalSelectorRe = new RegExp(`^${PSEUDO_GLOBAL_SELECTOR}{(.*)}\$`);
var DEFAULT_STYLE_ID = "hono-css";
var SELECTOR = Symbol();
var CLASS_NAME = Symbol();
var STYLE_STRING = Symbol();
var SELECTORS = Symbol();
var EXTERNAL_CLASS_NAMES = Symbol();
var CSS_ESCAPED = Symbol();
var IS_CSS_ESCAPED = Symbol();
var toHash = (str) => {
  let i = 0, out = 11;
  while (i < str.length) {
    out = 101 * out + str.charCodeAt(i++) >>> 0;
  }
  return "css-" + out;
};
var cssStringReStr = [
  '"(?:(?:\\\\[\\s\\S]|[^"\\\\])*)"',
  "'(?:(?:\\\\[\\s\\S]|[^'\\\\])*)'"
].join("|");
var minifyCssRe = new RegExp([
  "(" + cssStringReStr + ")",
  "(?:" + [
    "^\\s+",
    "\\/\\*.*?\\*\\/\\s*",
    "\\/\\/.*\\n\\s*",
    "\\s+$"
  ].join("|") + ")",
  "\\s*;\\s*(}|$)\\s*",
  "\\s*([{};:,])\\s*",
  "(\\s)\\s+"
].join("|"), "g");
var minify = (css) => {
  return css.replace(minifyCssRe, (_, $1, $2, $3, $4) => $1 || $2 || $3 || $4 || "");
};
var buildStyleString = (strings, values) => {
  const selectors = [];
  const externalClassNames = [];
  const label = strings[0].match(/^\s*\/\*(.*?)\*\//)?.[1] || "";
  let styleString = "";
  for (let i = 0, len = strings.length;i < len; i++) {
    styleString += strings[i];
    let vArray = values[i];
    if (typeof vArray === "boolean" || vArray === null || vArray === undefined) {
      continue;
    }
    if (!Array.isArray(vArray)) {
      vArray = [vArray];
    }
    for (let j = 0, len2 = vArray.length;j < len2; j++) {
      let value = vArray[j];
      if (typeof value === "boolean" || value === null || value === undefined) {
        continue;
      }
      if (typeof value === "string") {
        if (/([\\"'\/])/.test(value)) {
          styleString += value.replace(/([\\"']|(?<=<)\/)/g, "\\$1");
        } else {
          styleString += value;
        }
      } else if (typeof value === "number") {
        styleString += value;
      } else if (value[CSS_ESCAPED]) {
        styleString += value[CSS_ESCAPED];
      } else if (value[CLASS_NAME].startsWith("@keyframes ")) {
        selectors.push(value);
        styleString += ` ${value[CLASS_NAME].substring(11)} `;
      } else {
        if (strings[i + 1]?.match(/^\s*{/)) {
          selectors.push(value);
          value = `.${value[CLASS_NAME]}`;
        } else {
          selectors.push(...value[SELECTORS]);
          externalClassNames.push(...value[EXTERNAL_CLASS_NAMES]);
          value = value[STYLE_STRING];
          const valueLen = value.length;
          if (valueLen > 0) {
            const lastChar = value[valueLen - 1];
            if (lastChar !== ";" && lastChar !== "}") {
              value += ";";
            }
          }
        }
        styleString += `${value || ""}`;
      }
    }
  }
  return [label, minify(styleString), selectors, externalClassNames];
};
var cssCommon = (strings, values) => {
  let [label, thisStyleString, selectors, externalClassNames] = buildStyleString(strings, values);
  const isPseudoGlobal = isPseudoGlobalSelectorRe.exec(thisStyleString);
  if (isPseudoGlobal) {
    thisStyleString = isPseudoGlobal[1];
  }
  const selector = (isPseudoGlobal ? PSEUDO_GLOBAL_SELECTOR : "") + toHash(label + thisStyleString);
  const className = (isPseudoGlobal ? selectors.map((s) => s[CLASS_NAME]) : [selector, ...externalClassNames]).join(" ");
  return {
    [SELECTOR]: selector,
    [CLASS_NAME]: className,
    [STYLE_STRING]: thisStyleString,
    [SELECTORS]: selectors,
    [EXTERNAL_CLASS_NAMES]: externalClassNames
  };
};
var cxCommon = (args) => {
  for (let i = 0, len = args.length;i < len; i++) {
    const arg = args[i];
    if (typeof arg === "string") {
      args[i] = {
        [SELECTOR]: "",
        [CLASS_NAME]: "",
        [STYLE_STRING]: "",
        [SELECTORS]: [],
        [EXTERNAL_CLASS_NAMES]: [arg]
      };
    }
  }
  return args;
};
var keyframesCommon = (strings, ...values) => {
  const [label, styleString] = buildStyleString(strings, values);
  return {
    [SELECTOR]: "",
    [CLASS_NAME]: `@keyframes ${toHash(label + styleString)}`,
    [STYLE_STRING]: styleString,
    [SELECTORS]: [],
    [EXTERNAL_CLASS_NAMES]: []
  };
};
var viewTransitionNameIndex = 0;
var viewTransitionCommon = (strings, values) => {
  if (!strings) {
    strings = [`/* h-v-t ${viewTransitionNameIndex++} */`];
  }
  const content = Array.isArray(strings) ? cssCommon(strings, values) : strings;
  const transitionName = content[CLASS_NAME];
  const res = cssCommon(["view-transition-name:", ""], [transitionName]);
  content[CLASS_NAME] = PSEUDO_GLOBAL_SELECTOR + content[CLASS_NAME];
  content[STYLE_STRING] = content[STYLE_STRING].replace(/(?<=::view-transition(?:[a-z-]*)\()(?=\))/g, transitionName);
  res[CLASS_NAME] = res[SELECTOR] = transitionName;
  res[SELECTORS] = [...content[SELECTORS], content];
  return res;
};

// node_modules/hono/dist/jsx/dom/css.js
var splitRule = (rule) => {
  const result = [];
  let startPos = 0;
  let depth = 0;
  for (let i = 0, len = rule.length;i < len; i++) {
    const char = rule[i];
    if (char === "'" || char === '"') {
      const quote = char;
      i++;
      for (;i < len; i++) {
        if (rule[i] === "\\") {
          i++;
          continue;
        }
        if (rule[i] === quote) {
          break;
        }
      }
      continue;
    }
    if (char === "{") {
      depth++;
      continue;
    }
    if (char === "}") {
      depth--;
      if (depth === 0) {
        result.push(rule.slice(startPos, i + 1));
        startPos = i + 1;
      }
      continue;
    }
  }
  return result;
};
var createCssJsxDomObjects = ({ id }) => {
  let styleSheet = undefined;
  const findStyleSheet = () => {
    if (!styleSheet) {
      styleSheet = document.querySelector(`style#${id}`)?.sheet;
      if (styleSheet) {
        styleSheet.addedStyles = new Set;
      }
    }
    return styleSheet ? [styleSheet, styleSheet.addedStyles] : [];
  };
  const insertRule = (className, styleString) => {
    const [sheet, addedStyles] = findStyleSheet();
    if (!sheet || !addedStyles) {
      Promise.resolve().then(() => {
        if (!findStyleSheet()[0]) {
          throw new Error("style sheet not found");
        }
        insertRule(className, styleString);
      });
      return;
    }
    if (!addedStyles.has(className)) {
      addedStyles.add(className);
      (className.startsWith(PSEUDO_GLOBAL_SELECTOR) ? splitRule(styleString) : [`${className[0] === "@" ? "" : "."}${className}{${styleString}}`]).forEach((rule) => {
        sheet.insertRule(rule, sheet.cssRules.length);
      });
    }
  };
  const cssObject = {
    toString() {
      const selector = this[SELECTOR];
      insertRule(selector, this[STYLE_STRING]);
      this[SELECTORS].forEach(({ [CLASS_NAME]: className, [STYLE_STRING]: styleString }) => {
        insertRule(className, styleString);
      });
      return this[CLASS_NAME];
    }
  };
  const Style2 = ({ children }) => ({
    tag: "style",
    children: (Array.isArray(children) ? children : [children]).map((c) => c[STYLE_STRING]),
    props: { id }
  });
  return [cssObject, Style2];
};
var createCssContext = ({ id }) => {
  const [cssObject, Style2] = createCssJsxDomObjects({ id });
  const newCssClassNameObject = (cssClassName) => {
    cssClassName.toString = cssObject.toString;
    return cssClassName;
  };
  const css2 = (strings, ...values) => {
    return newCssClassNameObject(cssCommon(strings, values));
  };
  const cx2 = (...args) => {
    args = cxCommon(args);
    return css2(Array(args.length).fill(""), ...args);
  };
  const keyframes2 = keyframesCommon;
  const viewTransition2 = (strings, ...values) => {
    return newCssClassNameObject(viewTransitionCommon(strings, values));
  };
  return {
    css: css2,
    cx: cx2,
    keyframes: keyframes2,
    viewTransition: viewTransition2,
    Style: Style2
  };
};
var defaultContext = createCssContext({ id: DEFAULT_STYLE_ID });
var css = defaultContext.css;
var cx = defaultContext.cx;
var keyframes = defaultContext.keyframes;
var viewTransition = defaultContext.viewTransition;
var Style = defaultContext.Style;

// node_modules/hono/dist/helper/css/index.js
var createCssContext2 = ({ id }) => {
  const [cssJsxDomObject, StyleRenderToDom] = createCssJsxDomObjects({ id });
  const contextMap = new WeakMap;
  const replaceStyleRe = new RegExp(`(<style id="${id}">.*?)(</style>)`);
  const newCssClassNameObject = (cssClassName) => {
    const appendStyle = ({ buffer, context }) => {
      const [toAdd, added] = contextMap.get(context);
      const names = Object.keys(toAdd);
      if (!names.length) {
        return;
      }
      let stylesStr = "";
      names.forEach((className2) => {
        added[className2] = true;
        stylesStr += className2.startsWith(PSEUDO_GLOBAL_SELECTOR) ? toAdd[className2] : `${className2[0] === "@" ? "" : "."}${className2}{${toAdd[className2]}}`;
      });
      contextMap.set(context, [{}, added]);
      if (buffer && replaceStyleRe.test(buffer[0])) {
        buffer[0] = buffer[0].replace(replaceStyleRe, (_, pre, post) => `${pre}${stylesStr}${post}`);
        return;
      }
      const appendStyleScript = `<script>document.querySelector('#${id}').textContent+=${JSON.stringify(stylesStr)}</script>`;
      if (buffer) {
        buffer[0] = `${appendStyleScript}${buffer[0]}`;
        return;
      }
      return Promise.resolve(appendStyleScript);
    };
    const addClassNameToContext = ({ context }) => {
      if (!contextMap.get(context)) {
        contextMap.set(context, [{}, {}]);
      }
      const [toAdd, added] = contextMap.get(context);
      let allAdded = true;
      if (!added[cssClassName[SELECTOR]]) {
        allAdded = false;
        toAdd[cssClassName[SELECTOR]] = cssClassName[STYLE_STRING];
      }
      cssClassName[SELECTORS].forEach(({ [CLASS_NAME]: className2, [STYLE_STRING]: styleString }) => {
        if (!added[className2]) {
          allAdded = false;
          toAdd[className2] = styleString;
        }
      });
      if (allAdded) {
        return;
      }
      return Promise.resolve(raw2("", [appendStyle]));
    };
    const className = new String(cssClassName[CLASS_NAME]);
    Object.assign(className, cssClassName);
    className.isEscaped = true;
    className.callbacks = [addClassNameToContext];
    const promise = Promise.resolve(className);
    Object.assign(promise, cssClassName);
    promise.toString = cssJsxDomObject.toString;
    return promise;
  };
  const css22 = (strings, ...values) => {
    return newCssClassNameObject(cssCommon(strings, values));
  };
  const cx2 = (...args) => {
    args = cxCommon(args);
    return css22(Array(args.length).fill(""), ...args);
  };
  const keyframes2 = keyframesCommon;
  const viewTransition2 = (strings, ...values) => {
    return newCssClassNameObject(viewTransitionCommon(strings, values));
  };
  const Style2 = ({ children } = {}) => children ? raw2(`<style id="${id}">${children[STYLE_STRING]}</style>`) : raw2(`<style id="${id}"></style>`);
  Style2[DOM_RENDERER] = StyleRenderToDom;
  return {
    css: css22,
    cx: cx2,
    keyframes: keyframes2,
    viewTransition: viewTransition2,
    Style: Style2
  };
};
var defaultContext2 = createCssContext2({ id: DEFAULT_STYLE_ID });
var css3 = defaultContext2.css;
var cx2 = defaultContext2.cx;
var keyframes2 = defaultContext2.keyframes;
var viewTransition2 = defaultContext2.viewTransition;
var Style2 = defaultContext2.Style;
// node_modules/hono/dist/utils/stream.js
var StreamingApi = class {
  constructor(writable, _readable) {
    this.abortSubscribers = [];
    this.writable = writable;
    this.writer = writable.getWriter();
    this.encoder = new TextEncoder;
    const reader = _readable.getReader();
    this.responseReadable = new ReadableStream({
      async pull(controller) {
        const { done, value } = await reader.read();
        done ? controller.close() : controller.enqueue(value);
      },
      cancel: () => {
        this.abortSubscribers.forEach((subscriber) => subscriber());
      }
    });
  }
  async write(input) {
    try {
      if (typeof input === "string") {
        input = this.encoder.encode(input);
      }
      await this.writer.write(input);
    } catch (e) {
    }
    return this;
  }
  async writeln(input) {
    await this.write(input + "\n");
    return this;
  }
  sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async close() {
    try {
      await this.writer.close();
    } catch (e) {
    }
  }
  async pipe(body) {
    this.writer.releaseLock();
    await body.pipeTo(this.writable, { preventClose: true });
    this.writer = this.writable.getWriter();
  }
  async onAbort(listener) {
    this.abortSubscribers.push(listener);
  }
};

// node_modules/hono/dist/helper/streaming/stream.js
var stream2 = (c, cb) => {
  const { readable, writable } = new TransformStream;
  const stream22 = new StreamingApi(writable, readable);
  cb(stream22).finally(() => stream22.close());
  return c.newResponse(stream22.responseReadable);
};

// node_modules/hono/dist/context.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var _status;
var _executionCtx;
var _headers;
var _preparedHeaders;
var _res;
var _isFresh;
var Context = class {
  constructor(req, options) {
    this.env = {};
    this._var = {};
    this.finalized = false;
    this.error = undefined;
    __privateAdd(this, _status, 200);
    __privateAdd(this, _executionCtx, undefined);
    __privateAdd(this, _headers, undefined);
    __privateAdd(this, _preparedHeaders, undefined);
    __privateAdd(this, _res, undefined);
    __privateAdd(this, _isFresh, true);
    this.layout = undefined;
    this.renderer = (content) => this.html(content);
    this.notFoundHandler = () => new Response;
    this.render = (...args) => this.renderer(...args);
    this.setLayout = (layout) => this.layout = layout;
    this.getLayout = () => this.layout;
    this.setRenderer = (renderer) => {
      this.renderer = renderer;
    };
    this.header = (name, value, options2) => {
      if (value === undefined) {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).delete(name);
        } else if (__privateGet(this, _preparedHeaders)) {
          delete __privateGet(this, _preparedHeaders)[name.toLocaleLowerCase()];
        }
        if (this.finalized) {
          this.res.headers.delete(name);
        }
        return;
      }
      if (options2?.append) {
        if (!__privateGet(this, _headers)) {
          __privateSet(this, _isFresh, false);
          __privateSet(this, _headers, new Headers(__privateGet(this, _preparedHeaders)));
          __privateSet(this, _preparedHeaders, {});
        }
        __privateGet(this, _headers).append(name, value);
      } else {
        if (__privateGet(this, _headers)) {
          __privateGet(this, _headers).set(name, value);
        } else {
          __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
          __privateGet(this, _preparedHeaders)[name.toLowerCase()] = value;
        }
      }
      if (this.finalized) {
        if (options2?.append) {
          this.res.headers.append(name, value);
        } else {
          this.res.headers.set(name, value);
        }
      }
    };
    this.status = (status) => {
      __privateSet(this, _isFresh, false);
      __privateSet(this, _status, status);
    };
    this.set = (key, value) => {
      this._var ?? (this._var = {});
      this._var[key] = value;
    };
    this.get = (key) => {
      return this._var ? this._var[key] : undefined;
    };
    this.newResponse = (data, arg, headers) => {
      if (__privateGet(this, _isFresh) && !headers && !arg && __privateGet(this, _status) === 200) {
        return new Response(data, {
          headers: __privateGet(this, _preparedHeaders)
        });
      }
      if (arg && typeof arg !== "number") {
        const headers2 = setHeaders(new Headers(arg.headers), __privateGet(this, _preparedHeaders));
        return new Response(data, {
          headers: headers2,
          status: arg.status
        });
      }
      const status = typeof arg === "number" ? arg : __privateGet(this, _status);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers);
      setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      if (__privateGet(this, _res)) {
        __privateGet(this, _res).headers.forEach((v, k) => {
          __privateGet(this, _headers)?.set(k, v);
        });
        setHeaders(__privateGet(this, _headers), __privateGet(this, _preparedHeaders));
      }
      headers ?? (headers = {});
      for (const [k, v] of Object.entries(headers)) {
        if (typeof v === "string") {
          __privateGet(this, _headers).set(k, v);
        } else {
          __privateGet(this, _headers).delete(k);
          for (const v2 of v) {
            __privateGet(this, _headers).append(k, v2);
          }
        }
      }
      return new Response(data, {
        status,
        headers: __privateGet(this, _headers)
      });
    };
    this.body = (data, arg, headers) => {
      return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
    };
    this.text = (text, arg, headers) => {
      if (!__privateGet(this, _preparedHeaders)) {
        if (__privateGet(this, _isFresh) && !headers && !arg) {
          return new Response(text);
        }
        __privateSet(this, _preparedHeaders, {});
      }
      __privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
      return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
    };
    this.json = (object, arg, headers) => {
      const body = JSON.stringify(object);
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "application/json; charset=UTF-8";
      return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
    };
    this.html = (html4, arg, headers) => {
      __privateGet(this, _preparedHeaders) ?? __privateSet(this, _preparedHeaders, {});
      __privateGet(this, _preparedHeaders)["content-type"] = "text/html; charset=UTF-8";
      if (typeof html4 === "object") {
        if (!(html4 instanceof Promise)) {
          html4 = html4.toString();
        }
        if (html4 instanceof Promise) {
          return html4.then((html22) => resolveCallback(html22, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html22) => {
            return typeof arg === "number" ? this.newResponse(html22, arg, headers) : this.newResponse(html22, arg);
          });
        }
      }
      return typeof arg === "number" ? this.newResponse(html4, arg, headers) : this.newResponse(html4, arg);
    };
    this.redirect = (location, status = 302) => {
      __privateGet(this, _headers) ?? __privateSet(this, _headers, new Headers);
      __privateGet(this, _headers).set("Location", location);
      return this.newResponse(null, status);
    };
    this.notFound = () => {
      return this.notFoundHandler(this);
    };
    this.req = req;
    if (options) {
      __privateSet(this, _executionCtx, options.executionCtx);
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (__privateGet(this, _executionCtx) && "respondWith" in __privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (__privateGet(this, _executionCtx)) {
      return __privateGet(this, _executionCtx);
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    __privateSet(this, _isFresh, false);
    return __privateGet(this, _res) || __privateSet(this, _res, new Response("404 Not Found", { status: 404 }));
  }
  set res(_res2) {
    __privateSet(this, _isFresh, false);
    if (__privateGet(this, _res) && _res2) {
      __privateGet(this, _res).headers.delete("content-type");
      for (const [k, v] of __privateGet(this, _res).headers.entries()) {
        if (k === "set-cookie") {
          const cookies = __privateGet(this, _res).headers.getSetCookie();
          _res2.headers.delete("set-cookie");
          for (const cookie2 of cookies) {
            _res2.headers.append("set-cookie", cookie2);
          }
        } else {
          _res2.headers.set(k, v);
        }
      }
    }
    __privateSet(this, _res, _res2);
    this.finalized = true;
  }
  get var() {
    return { ...this._var };
  }
};
_status = new WeakMap;
_executionCtx = new WeakMap;
_headers = new WeakMap;
_preparedHeaders = new WeakMap;
_res = new WeakMap;
_isFresh = new WeakMap;
// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context3, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context3 instanceof Context) {
          context3.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (!handler) {
        if (context3 instanceof Context && context3.finalized === false && onNotFound) {
          res = await onNotFound(context3);
        }
      } else {
        try {
          res = await handler(context3, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context3 instanceof Context && onError) {
            context3.error = err;
            res = await onError(err, context3);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context3.finalized === false || isError)) {
        context3.res = res;
      }
      return context3;
    }
  };
};

// node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
  constructor(status = 500, options) {
    super(options?.message);
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      return this.res;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// node_modules/hono/dist/utils/body.js
var isFormDataContent = function(contentType) {
  if (contentType === null) {
    return false;
  }
  return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
};
async function parseFormData(request2, options) {
  const formData = await request2.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
var convertFormDataToBodyData = function(formData, options) {
  const form = {};
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  return form;
};
var isArrayField = function(field) {
  return Array.isArray(field);
};
var parseBody = async (request2, options = { all: false }) => {
  const headers = request2 instanceof HonoRequest ? request2.raw.headers : request2.headers;
  const contentType = headers.get("Content-Type");
  if (isFormDataContent(contentType)) {
    return parseFormData(request2, options);
  }
  return {};
};
var handleParsingAllValues = (form, key, value) => {
  if (form[key] && isArrayField(form[key])) {
    appendToExistingArray(form[key], value);
  } else if (form[key]) {
    convertToNewArray(form, key, value);
  } else {
    form[key] = value;
  }
};
var appendToExistingArray = (arr, value) => {
  arr.push(value);
};
var convertToNewArray = (form, key, value) => {
  form[key] = [form[key], value];
};

// node_modules/hono/dist/request.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _validatedData;
var _matchResult;
var HonoRequest = class {
  constructor(request2, path = "/", matchResult = [[]]) {
    __privateAdd2(this, _validatedData, undefined);
    __privateAdd2(this, _matchResult, undefined);
    this.routeIndex = 0;
    this.bodyCache = {};
    this.cachedBody = (key) => {
      const { bodyCache, raw: raw3 } = this;
      const cachedBody = bodyCache[key];
      if (cachedBody) {
        return cachedBody;
      }
      if (bodyCache.arrayBuffer) {
        return (async () => {
          return await new Response(bodyCache.arrayBuffer)[key]();
        })();
      }
      return bodyCache[key] = raw3[key]();
    };
    this.raw = request2;
    this.path = path;
    __privateSet2(this, _matchResult, matchResult);
    __privateSet2(this, _validatedData, {});
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = __privateGet2(this, _matchResult)[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : undefined;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(__privateGet2(this, _matchResult)[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(__privateGet2(this, _matchResult)[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return __privateGet2(this, _matchResult)[1] ? __privateGet2(this, _matchResult)[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await parseBody(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    __privateGet2(this, _validatedData)[target] = data;
  }
  valid(target) {
    return __privateGet2(this, _validatedData)[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route);
  }
  get routePath() {
    return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};
_validatedData = new WeakMap;
_matchResult = new WeakMap;

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var defineDynamicClass = function() {
  return class {
  };
};
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var _path;
var _Hono = class extends defineDynamicClass() {
  constructor(options = {}) {
    super();
    this._basePath = "/";
    __privateAdd3(this, _path, "/");
    this.routes = [];
    this.notFoundHandler = notFoundHandler;
    this.errorHandler = errorHandler;
    this.onError = (handler) => {
      this.errorHandler = handler;
      return this;
    };
    this.notFound = (handler) => {
      this.notFoundHandler = handler;
      return this;
    };
    this.fetch = (request3, Env, executionCtx) => {
      return this.dispatch(request3, executionCtx, Env, request3.method);
    };
    this.request = (input, requestInit, Env, executionCtx) => {
      if (input instanceof Request) {
        if (requestInit !== undefined) {
          input = new Request(input, requestInit);
        }
        return this.fetch(input, Env, executionCtx);
      }
      input = input.toString();
      const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
      const req = new Request(path, requestInit);
      return this.fetch(req, Env, executionCtx);
    };
    this.fire = () => {
      addEventListener("fetch", (event) => {
        event.respondWith(this.dispatch(event.request, event, undefined, event.request.method));
      });
    };
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.map((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          __privateSet3(this, _path, args1);
        } else {
          this.addRoute(method, __privateGet3(this, _path), args1);
        }
        args.map((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, __privateGet3(this, _path), handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        __privateSet3(this, _path, p);
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), __privateGet3(this, _path), handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        __privateSet3(this, _path, arg1);
      } else {
        __privateSet3(this, _path, "*");
        handlers.unshift(arg1);
      }
      handlers.map((handler) => {
        this.addRoute(METHOD_NAME_ALL, __privateGet3(this, _path), handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new _Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  route(path, app) {
    const subApp = this.basePath(path);
    if (!app) {
      return subApp;
    }
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  mount(path, applicationHandler, optionHandler) {
    const mergedPath = mergePath(this._basePath, path);
    const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
    const handler = async (c, next) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      const options = optionHandler ? optionHandler(c) : [c.env, executionContext];
      const optionsArray = Array.isArray(options) ? options : [options];
      const queryStrings = getQueryStrings(c.req.url);
      const res = await applicationHandler(new Request(new URL((c.req.path.slice(pathPrefixLength) || "/") + queryStrings, c.req.url), c.req.raw), ...optionsArray);
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request3, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request3, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request3, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(new HonoRequest(request3, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
        });
        if (!res) {
          return this.notFoundHandler(c);
        }
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context4 = await composed(c);
        if (!context4.finalized) {
          throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");
        }
        return context4.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
};
var Hono = _Hono;
_path = new WeakMap;
// node_modules/hono/dist/utils/mime.js
var getMimeType = (filename, mimes = baseMimes) => {
  const regexp = /\.([a-zA-Z0-9]+?)$/;
  const match = filename.match(regexp);
  if (!match) {
    return;
  }
  let mimeType = mimes[match[1]];
  if (mimeType && mimeType.startsWith("text") || mimeType === "application/json") {
    mimeType += "; charset=utf-8";
  }
  return mimeType;
};
var baseMimes = {
  aac: "audio/aac",
  avi: "video/x-msvideo",
  avif: "image/avif",
  av1: "video/av1",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  css: "text/css",
  csv: "text/csv",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  gz: "application/gzip",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "text/javascript",
  json: "application/json",
  jsonld: "application/ld+json",
  map: "application/json",
  mid: "audio/x-midi",
  midi: "audio/x-midi",
  mjs: "text/javascript",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  opus: "audio/opus",
  otf: "font/otf",
  pdf: "application/pdf",
  png: "image/png",
  rtf: "application/rtf",
  svg: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  ttf: "font/ttf",
  txt: "text/plain",
  wasm: "application/wasm",
  webm: "video/webm",
  weba: "audio/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xml: "application/xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary"
};
// node_modules/hono/dist/utils/jwt/jwt.js
var exports_jwt = {};
__export(exports_jwt, {
  verify: () => {
    {
      return verify;
    }
  },
  sign: () => {
    {
      return sign;
    }
  },
  decode: () => {
    {
      return decode;
    }
  }
});

// node_modules/hono/dist/utils/encode.js
var decodeBase64Url = (str) => {
  return decodeBase64(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
};
var encodeBase64Url = (buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m);
var encodeBase64 = (buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length;i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var decodeBase64 = (str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1;i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
};

// node_modules/hono/dist/utils/jwt/types.js
var JwtAlgorithmNotImplemented = class extends Error {
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};

// node_modules/hono/dist/utils/jwt/jwt.js
var utf8Encoder = new TextEncoder;
var utf8Decoder = new TextDecoder;
var encodeJwtPart = (part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part))).replace(/=/g, "");
var encodeSignaturePart = (buf) => encodeBase64Url(buf).replace(/=/g, "");
var decodeJwtPart = (part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part)));
var param = (name) => {
  switch (name.toUpperCase()) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
};
var signing = async (data, secret, alg = "HS256") => {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  const utf8Encoder2 = new TextEncoder;
  const cryptoKey = await crypto.subtle.importKey("raw", utf8Encoder2.encode(secret), param(alg), false, ["sign"]);
  return await crypto.subtle.sign(param(alg), cryptoKey, utf8Encoder2.encode(data));
};
var sign = async (payload, secret, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  const encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(partialToken, secret, alg);
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
};
var verify = async (token, secret, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { payload } = decode(token);
  const now = Math.floor(Date.now() / 1000);
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const signaturePart = tokenParts.slice(0, 2).join(".");
  const signature = await signing(signaturePart, secret, alg);
  const encodedSignature = encodeSignaturePart(signature);
  if (encodedSignature !== tokenParts[2]) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
};
var decode = (token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch (e) {
    throw new JwtTokenInvalid(token);
  }
};

// node_modules/hono/dist/middleware/jwt/index.js
var verify2 = exports_jwt.verify;
var decode2 = exports_jwt.decode;
var sign2 = exports_jwt.sign;

// src/middleware/jwt.ts
async function verifyJwt(token) {
  let value;
  try {
    const payload = await verify2(token, "123");
    value = { status: true, payload, message: "Token verified" };
  } catch (error) {
    value = { status: false, message: error.name };
  }
  return value;
}
function generateJwt(payload) {
  return sign2({ ...payload, exp: tokenExpiration, iat: tokenIssueAt }, "123");
}
var tokenExpiration = Math.floor(Date.now() / 1000) + 900;
var tokenIssueAt = Math.floor(Date.now() / 1000);
var verifyToken = createMiddleware(async (c, next) => {
  if (c.req.header("authorization") === undefined)
    return c.text("No authorize provided", 401);
  let token = c.req.header("authorization");
  token = token && token.startsWith("Bearer ") ? token.split("Bearer ")[1] : token;
  const result = await verifyJwt(token);
  if (result.status)
    await next();
  return c.json({ message: result.message });
});

// node_modules/hono/dist/router/reg-exp-router/node.js
var compareKey = function(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
};
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var Node = class {
  constructor() {
    this.children = {};
  }
  insert(tokens, index, paramMap, context5, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node;
        if (name !== "") {
          node.varIndex = context5.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context5, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  constructor() {
    this.context = { varIndex: 0 };
    this.root = new Node;
  }
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var buildWildcardRegExp = function(path) {
  return wildcardRegExpCache[path] ?? (wildcardRegExpCache[path] = new RegExp(path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}\$`));
};
var clearWildcardRegExpCache = function() {
  wildcardRegExpCache = {};
};
var buildMatcherFromPreprocessedRoutes = function(routes) {
  const trie2 = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = {};
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, {}]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie2.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = {};
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie2.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
};
var findMiddleware = function(middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
};
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) => method.toUpperCase());
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
var RegExpRouter = class {
  constructor() {
    this.name = "RegExpRouter";
    this.middleware = { [METHOD_NAME_ALL]: {} };
    this.routes = { [METHOD_NAME_ALL]: {} };
  }
  add(method, path, handler) {
    var _a;
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (methodNames.indexOf(method) === -1) {
      methodNames.push(method);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = {};
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          var _a2;
          (_a2 = middleware[m])[path] || (_a2[path] = findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
        });
      } else {
        (_a = middleware[method])[path] || (_a[path] = findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || []);
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        var _a2;
        if (method === METHOD_NAME_ALL || method === m) {
          (_a2 = routes[m])[path2] || (_a2[path2] = [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ]);
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = {};
    methodNames.forEach((method) => {
      matchers[method] = this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
    });
    this.middleware = this.routes = undefined;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute || (hasOwnRoute = true);
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  constructor(init) {
    this.name = "SmartRouter";
    this.routers = [];
    this.routes = [];
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router5 = routers[i];
      try {
        routes.forEach((args) => {
          router5.add(...args);
        });
        res = router5.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router5.match.bind(router5);
      this.routers = [router5];
      this.routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = class {
  constructor(method, handler, children) {
    this.order = 0;
    this.params = {};
    this.children = children || {};
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = {};
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    const parentPatterns = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        parentPatterns.push(...curNode.patterns);
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2;
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        parentPatterns.push(...curNode.patterns);
        possibleKeys.push(pattern[1]);
      }
      parentPatterns.push(...curNode.patterns);
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = {};
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node3, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node3.methods.length;i < len; i++) {
      const m = node3.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== undefined) {
        handlerSet.params = {};
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = {};
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node3 = curNodes[j];
        const nextNode = node3.children[part];
        if (nextNode) {
          nextNode.params = node3.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, node3.params, {}));
            }
            handlerSets.push(...this.gHSets(nextNode, method, node3.params, {}));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node3.patterns.length;k < len3; k++) {
          const pattern = node3.patterns[k];
          const params = { ...node3.params };
          if (pattern === "*") {
            const astNode = node3.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node3.params, {}));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node3.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node3.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node3.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node3.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  constructor() {
    this.name = "TrieRouter";
    this.node = new Node2;
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/postgres/src/index.js
import os from "os";
import fs from "fs";

// node_modules/postgres/src/query.js
var cachedError = function(xs) {
  if (originCache.has(xs))
    return originCache.get(xs);
  const x = Error.stackTraceLimit;
  Error.stackTraceLimit = 4;
  originCache.set(xs, new Error);
  Error.stackTraceLimit = x;
  return originCache.get(xs);
};
var originCache = new Map;
var originStackCache = new Map;
var originError = Symbol("OriginError");
var CLOSE = {};

class Query extends Promise {
  constructor(strings, args, handler, canceller, options = {}) {
    let resolve, reject;
    super((a, b) => {
      resolve = a;
      reject = b;
    });
    this.tagged = Array.isArray(strings.raw);
    this.strings = strings;
    this.args = args;
    this.handler = handler;
    this.canceller = canceller;
    this.options = options;
    this.state = null;
    this.statement = null;
    this.resolve = (x) => (this.active = false, resolve(x));
    this.reject = (x) => (this.active = false, reject(x));
    this.active = false;
    this.cancelled = null;
    this.executed = false;
    this.signature = "";
    this[originError] = this.handler.debug ? new Error : this.tagged && cachedError(this.strings);
  }
  get origin() {
    return (this.handler.debug ? this[originError].stack : this.tagged && originStackCache.has(this.strings) ? originStackCache.get(this.strings) : originStackCache.set(this.strings, this[originError].stack).get(this.strings)) || "";
  }
  static get [Symbol.species]() {
    return Promise;
  }
  cancel() {
    return this.canceller && (this.canceller(this), this.canceller = null);
  }
  simple() {
    this.options.simple = true;
    this.options.prepare = false;
    return this;
  }
  async readable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  async writable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  cursor(rows = 1, fn) {
    this.options.simple = false;
    if (typeof rows === "function") {
      fn = rows;
      rows = 1;
    }
    this.cursorRows = rows;
    if (typeof fn === "function")
      return this.cursorFn = fn, this;
    let prev;
    return {
      [Symbol.asyncIterator]: () => ({
        next: () => {
          if (this.executed && !this.active)
            return { done: true };
          prev && prev();
          const promise = new Promise((resolve, reject) => {
            this.cursorFn = (value) => {
              resolve({ value, done: false });
              return new Promise((r) => prev = r);
            };
            this.resolve = () => (this.active = false, resolve({ done: true }));
            this.reject = (x) => (this.active = false, reject(x));
          });
          this.execute();
          return promise;
        },
        return() {
          prev && prev(CLOSE);
          return { done: true };
        }
      })
    };
  }
  describe() {
    this.options.simple = false;
    this.onlyDescribe = this.options.prepare = true;
    return this;
  }
  stream() {
    throw new Error(".stream has been renamed to .forEach");
  }
  forEach(fn) {
    this.forEachFn = fn;
    this.handle();
    return this;
  }
  raw() {
    this.isRaw = true;
    return this;
  }
  values() {
    this.isRaw = "values";
    return this;
  }
  async handle() {
    !this.executed && (this.executed = true) && await 1 && this.handler(this);
  }
  execute() {
    this.handle();
    return this;
  }
  then() {
    this.handle();
    return super.then.apply(this, arguments);
  }
  catch() {
    this.handle();
    return super.catch.apply(this, arguments);
  }
  finally() {
    this.handle();
    return super.finally.apply(this, arguments);
  }
}

// node_modules/postgres/src/errors.js
var connection = function(x, options, socket) {
  const { host, port } = socket || options;
  const error = Object.assign(new Error("write " + x + " " + (options.path || host + ":" + port)), {
    code: x,
    errno: x,
    address: options.path || host
  }, options.path ? {} : { port });
  Error.captureStackTrace(error, connection);
  return error;
};
var postgres = function(x) {
  const error = new PostgresError(x);
  Error.captureStackTrace(error, postgres);
  return error;
};
var generic = function(code, message) {
  const error = Object.assign(new Error(code + ": " + message), { code });
  Error.captureStackTrace(error, generic);
  return error;
};
var notSupported = function(x) {
  const error = Object.assign(new Error(x + " (B) is not supported"), {
    code: "MESSAGE_NOT_SUPPORTED",
    name: x
  });
  Error.captureStackTrace(error, notSupported);
  return error;
};

class PostgresError extends Error {
  constructor(x) {
    super(x.message);
    this.name = this.constructor.name;
    Object.assign(this, x);
  }
}
var Errors = {
  connection,
  postgres,
  generic,
  notSupported
};

// node_modules/postgres/src/types.js
function handleValue(x, parameters, types3, options) {
  let value = x instanceof Parameter ? x.value : x;
  if (value === undefined) {
    x instanceof Parameter ? x.value = options.transform.undefined : value = x = options.transform.undefined;
    if (value === undefined)
      throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
  }
  return "$" + types3.push(x instanceof Parameter ? (parameters.push(x.value), x.array ? x.array[x.type || inferType(x.value)] || x.type || firstIsString(x.value) : x.type) : (parameters.push(x), inferType(x)));
}
function stringify(q, string, value, parameters, types3, options) {
  for (let i = 1;i < q.strings.length; i++) {
    string += stringifyValue(string, value, parameters, types3, options) + q.strings[i];
    value = q.args[i];
  }
  return string;
}
var stringifyValue = function(string, value, parameters, types3, o) {
  return value instanceof Builder ? value.build(string, parameters, types3, o) : value instanceof Query ? fragment(value, parameters, types3, o) : value instanceof Identifier ? value.value : value && value[0] instanceof Query ? value.reduce((acc, x) => acc + " " + fragment(x, parameters, types3, o), "") : handleValue(value, parameters, types3, o);
};
var fragment = function(q, parameters, types3, options) {
  q.fragment = true;
  return stringify(q, q.strings[0], q.args[0], parameters, types3, options);
};
var valuesBuilder = function(first, parameters, types3, columns, options) {
  return first.map((row) => "(" + columns.map((column) => stringifyValue("values", row[column], parameters, types3, options)).join(",") + ")").join(",");
};
var values = function(first, rest, parameters, types3, options) {
  const multi = Array.isArray(first[0]);
  const columns = rest.length ? rest.flat() : Object.keys(multi ? first[0] : first);
  return valuesBuilder(multi ? first : [first], parameters, types3, columns, options);
};
var select = function(first, rest, parameters, types3, options) {
  typeof first === "string" && (first = [first].concat(rest));
  if (Array.isArray(first))
    return escapeIdentifiers(first, options);
  let value;
  const columns = rest.length ? rest.flat() : Object.keys(first);
  return columns.map((x) => {
    value = first[x];
    return (value instanceof Query ? fragment(value, parameters, types3, options) : value instanceof Identifier ? value.value : handleValue(value, parameters, types3, options)) + " as " + escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x);
  }).join(",");
};
var notTagged = function() {
  throw Errors.generic("NOT_TAGGED_CALL", "Query not called as a tagged template literal");
};
var firstIsString = function(x) {
  if (Array.isArray(x))
    return firstIsString(x[0]);
  return typeof x === "string" ? 1009 : 0;
};
var typeHandlers = function(types3) {
  return Object.keys(types3).reduce((acc, k) => {
    types3[k].from && [].concat(types3[k].from).forEach((x) => acc.parsers[x] = types3[k].parse);
    if (types3[k].serialize) {
      acc.serializers[types3[k].to] = types3[k].serialize;
      types3[k].from && [].concat(types3[k].from).forEach((x) => acc.serializers[x] = types3[k].serialize);
    }
    return acc;
  }, { parsers: {}, serializers: {} });
};
var escapeIdentifiers = function(xs, { transform: { column } }) {
  return xs.map((x) => escapeIdentifier(column.to ? column.to(x) : x)).join(",");
};
var arrayEscape = function(x) {
  return x.replace(escapeBackslash, "\\\\").replace(escapeQuote, '\\"');
};
var arrayParserLoop = function(s, x, parser, typarray) {
  const xs = [];
  const delimiter = typarray === 1020 ? ";" : ",";
  for (;s.i < x.length; s.i++) {
    s.char = x[s.i];
    if (s.quoted) {
      if (s.char === "\\") {
        s.str += x[++s.i];
      } else if (s.char === '"') {
        xs.push(parser ? parser(s.str) : s.str);
        s.str = "";
        s.quoted = x[s.i + 1] === '"';
        s.last = s.i + 2;
      } else {
        s.str += s.char;
      }
    } else if (s.char === '"') {
      s.quoted = true;
    } else if (s.char === "{") {
      s.last = ++s.i;
      xs.push(arrayParserLoop(s, x, parser, typarray));
    } else if (s.char === "}") {
      s.quoted = false;
      s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
      break;
    } else if (s.char === delimiter && s.p !== "}" && s.p !== '"') {
      xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
    }
    s.p = s.char;
  }
  s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i + 1)) : x.slice(s.last, s.i + 1));
  return xs;
};
var createJsonTransform = function(fn) {
  return function jsonTransform(x, column) {
    return typeof x === "object" && x !== null && (column.type === 114 || column.type === 3802) ? Array.isArray(x) ? x.map((x2) => jsonTransform(x2, column)) : Object.entries(x).reduce((acc, [k, v]) => Object.assign(acc, { [fn(k)]: jsonTransform(v, column) }), {}) : x;
  };
};
var types3 = {
  string: {
    to: 25,
    from: null,
    serialize: (x) => "" + x
  },
  number: {
    to: 0,
    from: [21, 23, 26, 700, 701],
    serialize: (x) => "" + x,
    parse: (x) => +x
  },
  json: {
    to: 114,
    from: [114, 3802],
    serialize: (x) => JSON.stringify(x),
    parse: (x) => JSON.parse(x)
  },
  boolean: {
    to: 16,
    from: 16,
    serialize: (x) => x === true ? "t" : "f",
    parse: (x) => x === "t"
  },
  date: {
    to: 1184,
    from: [1082, 1114, 1184],
    serialize: (x) => (x instanceof Date ? x : new Date(x)).toISOString(),
    parse: (x) => new Date(x)
  },
  bytea: {
    to: 17,
    from: 17,
    serialize: (x) => "\\x" + Buffer.from(x).toString("hex"),
    parse: (x) => Buffer.from(x.slice(2), "hex")
  }
};

class NotTagged {
  then() {
    notTagged();
  }
  catch() {
    notTagged();
  }
  finally() {
    notTagged();
  }
}

class Identifier extends NotTagged {
  constructor(value) {
    super();
    this.value = escapeIdentifier(value);
  }
}

class Parameter extends NotTagged {
  constructor(value, type, array) {
    super();
    this.value = value;
    this.type = type;
    this.array = array;
  }
}

class Builder extends NotTagged {
  constructor(first, rest) {
    super();
    this.first = first;
    this.rest = rest;
  }
  build(before, parameters, types4, options) {
    const keyword = builders.map(([x, fn]) => ({ fn, i: before.search(x) })).sort((a, b) => a.i - b.i).pop();
    return keyword.i === -1 ? escapeIdentifiers(this.first, options) : keyword.fn(this.first, this.rest, parameters, types4, options);
  }
}
var defaultHandlers = typeHandlers(types3);
var builders = Object.entries({
  values,
  in: (...xs) => {
    const x = values(...xs);
    return x === "()" ? "(null)" : x;
  },
  select,
  as: select,
  returning: select,
  "\\(": select,
  update(first, rest, parameters, types4, options) {
    return (rest.length ? rest.flat() : Object.keys(first)).map((x) => escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x) + "=" + stringifyValue("values", first[x], parameters, types4, options));
  },
  insert(first, rest, parameters, types4, options) {
    const columns = rest.length ? rest.flat() : Object.keys(Array.isArray(first) ? first[0] : first);
    return "(" + escapeIdentifiers(columns, options) + ")values" + valuesBuilder(Array.isArray(first) ? first : [first], parameters, types4, columns, options);
  }
}).map(([x, fn]) => [new RegExp("((?:^|[\\s(])" + x + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), fn]);
var serializers = defaultHandlers.serializers;
var parsers = defaultHandlers.parsers;
var mergeUserTypes = function(types4) {
  const user = typeHandlers(types4 || {});
  return {
    serializers: Object.assign({}, serializers, user.serializers),
    parsers: Object.assign({}, parsers, user.parsers)
  };
};
var escapeIdentifier = function escape(str) {
  return '"' + str.replace(/"/g, '""').replace(/\./g, '"."') + '"';
};
var inferType = function inferType2(x) {
  return x instanceof Parameter ? x.type : x instanceof Date ? 1184 : x instanceof Uint8Array ? 17 : x === true || x === false ? 16 : typeof x === "bigint" ? 20 : Array.isArray(x) ? inferType2(x[0]) : 0;
};
var escapeBackslash = /\\/g;
var escapeQuote = /"/g;
var arraySerializer = function arraySerializer2(xs, serializer, options, typarray) {
  if (Array.isArray(xs) === false)
    return xs;
  if (!xs.length)
    return "{}";
  const first = xs[0];
  const delimiter = typarray === 1020 ? ";" : ",";
  if (Array.isArray(first) && !first.type)
    return "{" + xs.map((x) => arraySerializer2(x, serializer, options, typarray)).join(delimiter) + "}";
  return "{" + xs.map((x) => {
    if (x === undefined) {
      x = options.transform.undefined;
      if (x === undefined)
        throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
    }
    return x === null ? "null" : '"' + arrayEscape(serializer ? serializer(x.type ? x.value : x) : "" + x) + '"';
  }).join(delimiter) + "}";
};
var arrayParserState = {
  i: 0,
  char: null,
  str: "",
  quoted: false,
  last: 0
};
var arrayParser = function arrayParser2(x, parser, typarray) {
  arrayParserState.i = arrayParserState.last = 0;
  return arrayParserLoop(arrayParserState, x, parser, typarray);
};
var toCamel = (x) => {
  let str = x[0];
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toPascal = (x) => {
  let str = x[0].toUpperCase();
  for (let i = 1;i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
};
var toKebab = (x) => x.replace(/_/g, "-");
var fromCamel = (x) => x.replace(/([A-Z])/g, "_$1").toLowerCase();
var fromPascal = (x) => (x.slice(0, 1) + x.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase();
var fromKebab = (x) => x.replace(/-/g, "_");
toCamel.column = { from: toCamel };
toCamel.value = { from: createJsonTransform(toCamel) };
fromCamel.column = { to: fromCamel };
var camel = { ...toCamel };
camel.column.to = fromCamel;
toPascal.column = { from: toPascal };
toPascal.value = { from: createJsonTransform(toPascal) };
fromPascal.column = { to: fromPascal };
var pascal = { ...toPascal };
pascal.column.to = fromPascal;
toKebab.column = { from: toKebab };
toKebab.value = { from: createJsonTransform(toKebab) };
fromKebab.column = { to: fromKebab };
var kebab = { ...toKebab };
kebab.column.to = fromKebab;

// node_modules/postgres/src/connection.js
import net from "net";
import tls from "tls";
import crypto3 from "crypto";
import Stream from "stream";
import {performance as performance2} from "perf_hooks";

// node_modules/postgres/src/result.js
class Result extends Array {
  constructor() {
    super();
    Object.defineProperties(this, {
      count: { value: null, writable: true },
      state: { value: null, writable: true },
      command: { value: null, writable: true },
      columns: { value: null, writable: true },
      statement: { value: null, writable: true }
    });
  }
  static get [Symbol.species]() {
    return Array;
  }
}

// node_modules/postgres/src/queue.js
var Queue = function(initial = []) {
  let xs = initial.slice();
  let index = 0;
  return {
    get length() {
      return xs.length - index;
    },
    remove: (x) => {
      const index2 = xs.indexOf(x);
      return index2 === -1 ? null : (xs.splice(index2, 1), x);
    },
    push: (x) => (xs.push(x), x),
    shift: () => {
      const out = xs[index++];
      if (index === xs.length) {
        index = 0;
        xs = [];
      } else {
        xs[index - 1] = undefined;
      }
      return out;
    }
  };
};
var queue_default = Queue;

// node_modules/postgres/src/bytes.js
var fit = function(x) {
  if (buffer2.length - b.i < x) {
    const prev = buffer2, length = prev.length;
    buffer2 = Buffer.allocUnsafe(length + (length >> 1) + x);
    prev.copy(buffer2);
  }
};
var reset = function() {
  b.i = 0;
  return b;
};
var size = 256;
var buffer2 = Buffer.allocUnsafe(size);
var messages = "BCcDdEFfHPpQSX".split("").reduce((acc, x) => {
  const v = x.charCodeAt(0);
  acc[x] = () => {
    buffer2[0] = v;
    b.i = 5;
    return b;
  };
  return acc;
}, {});
var b = Object.assign(reset, messages, {
  N: String.fromCharCode(0),
  i: 0,
  inc(x) {
    b.i += x;
    return b;
  },
  str(x) {
    const length = Buffer.byteLength(x);
    fit(length);
    b.i += buffer2.write(x, b.i, length, "utf8");
    return b;
  },
  i16(x) {
    fit(2);
    buffer2.writeUInt16BE(x, b.i);
    b.i += 2;
    return b;
  },
  i32(x, i) {
    if (i || i === 0) {
      buffer2.writeUInt32BE(x, i);
      return b;
    }
    fit(4);
    buffer2.writeUInt32BE(x, b.i);
    b.i += 4;
    return b;
  },
  z(x) {
    fit(x);
    buffer2.fill(0, b.i, b.i + x);
    b.i += x;
    return b;
  },
  raw(x) {
    buffer2 = Buffer.concat([buffer2.subarray(0, b.i), x]);
    b.i = buffer2.length;
    return b;
  },
  end(at = 1) {
    buffer2.writeUInt32BE(b.i - at, at);
    const out = buffer2.subarray(0, b.i);
    b.i = 0;
    buffer2 = Buffer.allocUnsafe(size);
    return out;
  }
});
var bytes_default = b;

// node_modules/postgres/src/connection.js
var Connection = function(options, queues = {}, { onopen = noop, onend = noop, onclose = noop } = {}) {
  const {
    ssl,
    max,
    user,
    host,
    port,
    database,
    parsers: parsers2,
    transform,
    onnotice,
    onnotify,
    onparameter,
    max_pipeline,
    keep_alive,
    backoff,
    target_session_attrs
  } = options;
  const sent = queue_default(), id = uid++, backend = { pid: null, secret: null }, idleTimer = timer(end, options.idle_timeout), lifeTimer = timer(end, options.max_lifetime), connectTimer = timer(connectTimedOut, options.connect_timeout);
  let socket = null, cancelMessage, result2 = new Result, incoming = Buffer.alloc(0), needsTypes = options.fetch_types, backendParameters = {}, statements = {}, statementId = Math.random().toString(36).slice(2), statementCount = 1, closedDate = 0, remaining = 0, hostIndex = 0, retries = 0, length = 0, delay = 0, rows = 0, serverSignature = null, nextWriteTimer = null, terminated = false, incomings = null, results = null, initial = null, ending = null, stream5 = null, chunk = null, ended = null, nonce = null, query3 = null, final = null;
  const connection2 = {
    queue: queues.closed,
    idleTimer,
    connect(query4) {
      initial = query4 || true;
      reconnect();
    },
    terminate,
    execute,
    cancel,
    end,
    count: 0,
    id
  };
  queues.closed && queues.closed.push(connection2);
  return connection2;
  async function createSocket() {
    let x;
    try {
      x = options.socket ? await Promise.resolve(options.socket(options)) : new net.Socket;
    } catch (e) {
      error(e);
      return;
    }
    x.on("error", error);
    x.on("close", closed);
    x.on("drain", drain);
    return x;
  }
  async function cancel({ pid, secret }, resolve, reject) {
    try {
      cancelMessage = bytes_default().i32(16).i32(80877102).i32(pid).i32(secret).end(16);
      await connect();
      socket.once("error", reject);
      socket.once("close", resolve);
    } catch (error2) {
      reject(error2);
    }
  }
  function execute(q) {
    if (terminated)
      return queryError(q, Errors.connection("CONNECTION_DESTROYED", options));
    if (q.cancelled)
      return;
    try {
      q.state = backend;
      query3 ? sent.push(q) : (query3 = q, query3.active = true);
      build(q);
      return write(toBuffer(q)) && !q.describeFirst && !q.cursorFn && sent.length < max_pipeline && (!q.options.onexecute || q.options.onexecute(connection2));
    } catch (error2) {
      sent.length === 0 && write(Sync);
      errored(error2);
      return true;
    }
  }
  function toBuffer(q) {
    if (q.parameters.length >= 65534)
      throw Errors.generic("MAX_PARAMETERS_EXCEEDED", "Max number of parameters (65534) exceeded");
    return q.options.simple ? bytes_default().Q().str(q.statement.string + bytes_default.N).end() : q.describeFirst ? Buffer.concat([describe(q), Flush]) : q.prepare ? q.prepared ? prepared(q) : Buffer.concat([describe(q), prepared(q)]) : unnamed(q);
  }
  function describe(q) {
    return Buffer.concat([
      Parse(q.statement.string, q.parameters, q.statement.types, q.statement.name),
      Describe("S", q.statement.name)
    ]);
  }
  function prepared(q) {
    return Buffer.concat([
      Bind(q.parameters, q.statement.types, q.statement.name, q.cursorName),
      q.cursorFn ? Execute("", q.cursorRows) : ExecuteUnnamed
    ]);
  }
  function unnamed(q) {
    return Buffer.concat([
      Parse(q.statement.string, q.parameters, q.statement.types),
      DescribeUnnamed,
      prepared(q)
    ]);
  }
  function build(q) {
    const parameters = [], types5 = [];
    const string = stringify(q, q.strings[0], q.args[0], parameters, types5, options);
    !q.tagged && q.args.forEach((x) => handleValue(x, parameters, types5, options));
    q.prepare = options.prepare && ("prepare" in q.options ? q.options.prepare : true);
    q.string = string;
    q.signature = q.prepare && types5 + string;
    q.onlyDescribe && delete statements[q.signature];
    q.parameters = q.parameters || parameters;
    q.prepared = q.prepare && q.signature in statements;
    q.describeFirst = q.onlyDescribe || parameters.length && !q.prepared;
    q.statement = q.prepared ? statements[q.signature] : { string, types: types5, name: q.prepare ? statementId + statementCount++ : "" };
    typeof options.debug === "function" && options.debug(id, string, parameters, types5);
  }
  function write(x, fn) {
    chunk = chunk ? Buffer.concat([chunk, x]) : Buffer.from(x);
    if (fn || chunk.length >= 1024)
      return nextWrite(fn);
    nextWriteTimer === null && (nextWriteTimer = setImmediate(nextWrite));
    return true;
  }
  function nextWrite(fn) {
    const x = socket.write(chunk, fn);
    nextWriteTimer !== null && clearImmediate(nextWriteTimer);
    chunk = nextWriteTimer = null;
    return x;
  }
  function connectTimedOut() {
    errored(Errors.connection("CONNECT_TIMEOUT", options, socket));
    socket.destroy();
  }
  async function secure() {
    write(SSLRequest);
    const canSSL = await new Promise((r) => socket.once("data", (x) => r(x[0] === 83)));
    if (!canSSL && ssl === "prefer")
      return connected();
    socket.removeAllListeners();
    socket = tls.connect({
      socket,
      servername: net.isIP(socket.host) ? undefined : socket.host,
      ...ssl === "require" || ssl === "allow" || ssl === "prefer" ? { rejectUnauthorized: false } : ssl === "verify-full" ? {} : typeof ssl === "object" ? ssl : {}
    });
    socket.on("secureConnect", connected);
    socket.on("error", error);
    socket.on("close", closed);
    socket.on("drain", drain);
  }
  function drain() {
    !query3 && onopen(connection2);
  }
  function data(x) {
    if (incomings) {
      incomings.push(x);
      remaining -= x.length;
      if (remaining >= 0)
        return;
    }
    incoming = incomings ? Buffer.concat(incomings, length - remaining) : incoming.length === 0 ? x : Buffer.concat([incoming, x], incoming.length + x.length);
    while (incoming.length > 4) {
      length = incoming.readUInt32BE(1);
      if (length >= incoming.length) {
        remaining = length - incoming.length;
        incomings = [incoming];
        break;
      }
      try {
        handle(incoming.subarray(0, length + 1));
      } catch (e) {
        query3 && (query3.cursorFn || query3.describeFirst) && write(Sync);
        errored(e);
      }
      incoming = incoming.subarray(length + 1);
      remaining = 0;
      incomings = null;
    }
  }
  async function connect() {
    terminated = false;
    backendParameters = {};
    socket || (socket = await createSocket());
    if (!socket)
      return;
    connectTimer.start();
    if (options.socket)
      return ssl ? secure() : connected();
    socket.on("connect", ssl ? secure : connected);
    if (options.path)
      return socket.connect(options.path);
    socket.ssl = ssl;
    socket.connect(port[hostIndex], host[hostIndex]);
    socket.host = host[hostIndex];
    socket.port = port[hostIndex];
    hostIndex = (hostIndex + 1) % port.length;
  }
  function reconnect() {
    setTimeout(connect, closedDate ? closedDate + delay - performance2.now() : 0);
  }
  function connected() {
    try {
      statements = {};
      needsTypes = options.fetch_types;
      statementId = Math.random().toString(36).slice(2);
      statementCount = 1;
      lifeTimer.start();
      socket.on("data", data);
      keep_alive && socket.setKeepAlive && socket.setKeepAlive(true, 1000 * keep_alive);
      const s = StartupMessage();
      write(s);
    } catch (err) {
      error(err);
    }
  }
  function error(err) {
    if (connection2.queue === queues.connecting && options.host[retries + 1])
      return;
    errored(err);
    while (sent.length)
      queryError(sent.shift(), err);
  }
  function errored(err) {
    stream5 && (stream5.destroy(err), stream5 = null);
    query3 && queryError(query3, err);
    initial && (queryError(initial, err), initial = null);
  }
  function queryError(query4, err) {
    Object.defineProperties(err, {
      stack: { value: err.stack + query4.origin.replace(/.*\n/, "\n"), enumerable: options.debug },
      query: { value: query4.string, enumerable: options.debug },
      parameters: { value: query4.parameters, enumerable: options.debug },
      args: { value: query4.args, enumerable: options.debug },
      types: { value: query4.statement && query4.statement.types, enumerable: options.debug }
    });
    query4.reject(err);
  }
  function end() {
    return ending || (!connection2.reserved && onend(connection2), !connection2.reserved && !initial && !query3 && sent.length === 0 ? (terminate(), new Promise((r) => socket && socket.readyState !== "closed" ? socket.once("close", r) : r())) : ending = new Promise((r) => ended = r));
  }
  function terminate() {
    terminated = true;
    if (stream5 || query3 || initial || sent.length)
      error(Errors.connection("CONNECTION_DESTROYED", options));
    clearImmediate(nextWriteTimer);
    if (socket) {
      socket.removeListener("data", data);
      socket.removeListener("connect", connected);
      socket.readyState === "open" && socket.end(bytes_default().X().end());
    }
    ended && (ended(), ending = ended = null);
  }
  async function closed(hadError) {
    incoming = Buffer.alloc(0);
    remaining = 0;
    incomings = null;
    clearImmediate(nextWriteTimer);
    socket.removeListener("data", data);
    socket.removeListener("connect", connected);
    idleTimer.cancel();
    lifeTimer.cancel();
    connectTimer.cancel();
    if (socket.encrypted) {
      socket.removeAllListeners();
      socket = null;
    }
    if (initial)
      return reconnect();
    !hadError && (query3 || sent.length) && error(Errors.connection("CONNECTION_CLOSED", options, socket));
    closedDate = performance2.now();
    hadError && options.shared.retries++;
    delay = (typeof backoff === "function" ? backoff(options.shared.retries) : backoff) * 1000;
    onclose(connection2, Errors.connection("CONNECTION_CLOSED", options, socket));
  }
  function handle(xs, x = xs[0]) {
    (x === 68 ? DataRow : x === 100 ? CopyData : x === 65 ? NotificationResponse : x === 83 ? ParameterStatus : x === 90 ? ReadyForQuery : x === 67 ? CommandComplete : x === 50 ? BindComplete : x === 49 ? ParseComplete : x === 116 ? ParameterDescription : x === 84 ? RowDescription : x === 82 ? Authentication : x === 110 ? NoData : x === 75 ? BackendKeyData : x === 69 ? ErrorResponse : x === 115 ? PortalSuspended : x === 51 ? CloseComplete : x === 71 ? CopyInResponse : x === 78 ? NoticeResponse : x === 72 ? CopyOutResponse : x === 99 ? CopyDone : x === 73 ? EmptyQueryResponse : x === 86 ? FunctionCallResponse : x === 118 ? NegotiateProtocolVersion : x === 87 ? CopyBothResponse : UnknownMessage)(xs);
  }
  function DataRow(x) {
    let index = 7;
    let length2;
    let column;
    let value;
    const row = query3.isRaw ? new Array(query3.statement.columns.length) : {};
    for (let i = 0;i < query3.statement.columns.length; i++) {
      column = query3.statement.columns[i];
      length2 = x.readInt32BE(index);
      index += 4;
      value = length2 === -1 ? null : query3.isRaw === true ? x.subarray(index, index += length2) : column.parser === undefined ? x.toString("utf8", index, index += length2) : column.parser.array === true ? column.parser(x.toString("utf8", index + 1, index += length2)) : column.parser(x.toString("utf8", index, index += length2));
      query3.isRaw ? row[i] = query3.isRaw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
    }
    query3.forEachFn ? query3.forEachFn(transform.row.from ? transform.row.from(row) : row, result2) : result2[rows++] = transform.row.from ? transform.row.from(row) : row;
  }
  function ParameterStatus(x) {
    const [k, v] = x.toString("utf8", 5, x.length - 1).split(bytes_default.N);
    backendParameters[k] = v;
    if (options.parameters[k] !== v) {
      options.parameters[k] = v;
      onparameter && onparameter(k, v);
    }
  }
  function ReadyForQuery(x) {
    query3 && query3.options.simple && query3.resolve(results || result2);
    query3 = results = null;
    result2 = new Result;
    connectTimer.cancel();
    if (initial) {
      if (target_session_attrs) {
        if (!backendParameters.in_hot_standby || !backendParameters.default_transaction_read_only)
          return fetchState();
        else if (tryNext(target_session_attrs, backendParameters))
          return terminate();
      }
      if (needsTypes) {
        initial === true && (initial = null);
        return fetchArrayTypes();
      }
      initial !== true && execute(initial);
      options.shared.retries = retries = 0;
      initial = null;
      return;
    }
    while (sent.length && (query3 = sent.shift()) && (query3.active = true, query3.cancelled))
      Connection(options).cancel(query3.state, query3.cancelled.resolve, query3.cancelled.reject);
    if (query3)
      return;
    connection2.reserved ? !connection2.reserved.release && x[5] === 73 ? ending ? terminate() : (connection2.reserved = null, onopen(connection2)) : connection2.reserved() : ending ? terminate() : onopen(connection2);
  }
  function CommandComplete(x) {
    rows = 0;
    for (let i = x.length - 1;i > 0; i--) {
      if (x[i] === 32 && x[i + 1] < 58 && result2.count === null)
        result2.count = +x.toString("utf8", i + 1, x.length - 1);
      if (x[i - 1] >= 65) {
        result2.command = x.toString("utf8", 5, i);
        result2.state = backend;
        break;
      }
    }
    final && (final(), final = null);
    if (result2.command === "BEGIN" && max !== 1 && !connection2.reserved)
      return errored(Errors.generic("UNSAFE_TRANSACTION", "Only use sql.begin, sql.reserved or max: 1"));
    if (query3.options.simple)
      return BindComplete();
    if (query3.cursorFn) {
      result2.count && query3.cursorFn(result2);
      write(Sync);
    }
    query3.resolve(result2);
  }
  function ParseComplete() {
    query3.parsing = false;
  }
  function BindComplete() {
    !result2.statement && (result2.statement = query3.statement);
    result2.columns = query3.statement.columns;
  }
  function ParameterDescription(x) {
    const length2 = x.readUInt16BE(5);
    for (let i = 0;i < length2; ++i)
      !query3.statement.types[i] && (query3.statement.types[i] = x.readUInt32BE(7 + i * 4));
    query3.prepare && (statements[query3.signature] = query3.statement);
    query3.describeFirst && !query3.onlyDescribe && (write(prepared(query3)), query3.describeFirst = false);
  }
  function RowDescription(x) {
    if (result2.command) {
      results = results || [result2];
      results.push(result2 = new Result);
      result2.count = null;
      query3.statement.columns = null;
    }
    const length2 = x.readUInt16BE(5);
    let index = 7;
    let start;
    query3.statement.columns = Array(length2);
    for (let i = 0;i < length2; ++i) {
      start = index;
      while (x[index++] !== 0)
        ;
      const table = x.readUInt32BE(index);
      const number = x.readUInt16BE(index + 4);
      const type = x.readUInt32BE(index + 6);
      query3.statement.columns[i] = {
        name: transform.column.from ? transform.column.from(x.toString("utf8", start, index - 1)) : x.toString("utf8", start, index - 1),
        parser: parsers2[type],
        table,
        number,
        type
      };
      index += 18;
    }
    result2.statement = query3.statement;
    if (query3.onlyDescribe)
      return query3.resolve(query3.statement), write(Sync);
  }
  async function Authentication(x, type = x.readUInt32BE(5)) {
    (type === 3 ? AuthenticationCleartextPassword : type === 5 ? AuthenticationMD5Password : type === 10 ? SASL : type === 11 ? SASLContinue : type === 12 ? SASLFinal : type !== 0 ? UnknownAuth : noop)(x, type);
  }
  async function AuthenticationCleartextPassword() {
    const payload = await Pass();
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function AuthenticationMD5Password(x) {
    const payload = "md5" + await md5(Buffer.concat([
      Buffer.from(await md5(await Pass() + user)),
      x.subarray(9)
    ]));
    write(bytes_default().p().str(payload).z(1).end());
  }
  async function SASL() {
    nonce = (await crypto3.randomBytes(18)).toString("base64");
    bytes_default().p().str("SCRAM-SHA-256" + bytes_default.N);
    const i = bytes_default.i;
    write(bytes_default.inc(4).str("n,,n=*,r=" + nonce).i32(bytes_default.i - i - 4, i).end());
  }
  async function SASLContinue(x) {
    const res = x.toString("utf8", 9).split(",").reduce((acc, x2) => (acc[x2[0]] = x2.slice(2), acc), {});
    const saltedPassword = await crypto3.pbkdf2Sync(await Pass(), Buffer.from(res.s, "base64"), parseInt(res.i), 32, "sha256");
    const clientKey = await hmac(saltedPassword, "Client Key");
    const auth = "n=*,r=" + nonce + ",r=" + res.r + ",s=" + res.s + ",i=" + res.i + ",c=biws,r=" + res.r;
    serverSignature = (await hmac(await hmac(saltedPassword, "Server Key"), auth)).toString("base64");
    const payload = "c=biws,r=" + res.r + ",p=" + xor(clientKey, Buffer.from(await hmac(await sha2562(clientKey), auth))).toString("base64");
    write(bytes_default().p().str(payload).end());
  }
  function SASLFinal(x) {
    if (x.toString("utf8", 9).split(bytes_default.N, 1)[0].slice(2) === serverSignature)
      return;
    errored(Errors.generic("SASL_SIGNATURE_MISMATCH", "The server did not return the correct signature"));
    socket.destroy();
  }
  function Pass() {
    return Promise.resolve(typeof options.pass === "function" ? options.pass() : options.pass);
  }
  function NoData() {
    result2.statement = query3.statement;
    result2.statement.columns = [];
    if (query3.onlyDescribe)
      return query3.resolve(query3.statement), write(Sync);
  }
  function BackendKeyData(x) {
    backend.pid = x.readUInt32BE(5);
    backend.secret = x.readUInt32BE(9);
  }
  async function fetchArrayTypes() {
    needsTypes = false;
    const types5 = await new Query([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `], [], execute);
    types5.forEach(({ oid, typarray }) => addArrayType(oid, typarray));
  }
  function addArrayType(oid, typarray) {
    if (!!options.parsers[typarray] && !!options.serializers[typarray])
      return;
    const parser = options.parsers[oid];
    options.shared.typeArrayMap[oid] = typarray;
    options.parsers[typarray] = (xs) => arrayParser(xs, parser, typarray);
    options.parsers[typarray].array = true;
    options.serializers[typarray] = (xs) => arraySerializer(xs, options.serializers[oid], options, typarray);
  }
  function tryNext(x, xs) {
    return x === "read-write" && xs.default_transaction_read_only === "on" || x === "read-only" && xs.default_transaction_read_only === "off" || x === "primary" && xs.in_hot_standby === "on" || x === "standby" && xs.in_hot_standby === "off" || x === "prefer-standby" && xs.in_hot_standby === "off" && options.host[retries];
  }
  function fetchState() {
    const query4 = new Query([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `], [], execute, null, { simple: true });
    query4.resolve = ([[a], [b2]]) => {
      backendParameters.default_transaction_read_only = a.transaction_read_only;
      backendParameters.in_hot_standby = b2.pg_is_in_recovery ? "on" : "off";
    };
    query4.execute();
  }
  function ErrorResponse(x) {
    query3 && (query3.cursorFn || query3.describeFirst) && write(Sync);
    const error2 = Errors.postgres(parseError(x));
    query3 && query3.retried ? errored(query3.retried) : query3 && retryRoutines.has(error2.routine) ? retry(query3, error2) : errored(error2);
  }
  function retry(q, error2) {
    delete statements[q.signature];
    q.retried = error2;
    execute(q);
  }
  function NotificationResponse(x) {
    if (!onnotify)
      return;
    let index = 9;
    while (x[index++] !== 0)
      ;
    onnotify(x.toString("utf8", 9, index - 1), x.toString("utf8", index, x.length - 1));
  }
  async function PortalSuspended() {
    try {
      const x = await Promise.resolve(query3.cursorFn(result2));
      rows = 0;
      x === CLOSE ? write(Close(query3.portal)) : (result2 = new Result, write(Execute("", query3.cursorRows)));
    } catch (err) {
      write(Sync);
      query3.reject(err);
    }
  }
  function CloseComplete() {
    result2.count && query3.cursorFn(result2);
    query3.resolve(result2);
  }
  function CopyInResponse() {
    stream5 = new Stream.Writable({
      autoDestroy: true,
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream5 = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query3.resolve(stream5);
  }
  function CopyOutResponse() {
    stream5 = new Stream.Readable({
      read() {
        socket.resume();
      }
    });
    query3.resolve(stream5);
  }
  function CopyBothResponse() {
    stream5 = new Stream.Duplex({
      autoDestroy: true,
      read() {
        socket.resume();
      },
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream5 = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query3.resolve(stream5);
  }
  function CopyData(x) {
    stream5 && (stream5.push(x.subarray(5)) || socket.pause());
  }
  function CopyDone() {
    stream5 && stream5.push(null);
    stream5 = null;
  }
  function NoticeResponse(x) {
    onnotice ? onnotice(parseError(x)) : console.log(parseError(x));
  }
  function EmptyQueryResponse() {
  }
  function FunctionCallResponse() {
    errored(Errors.notSupported("FunctionCallResponse"));
  }
  function NegotiateProtocolVersion() {
    errored(Errors.notSupported("NegotiateProtocolVersion"));
  }
  function UnknownMessage(x) {
    console.error("Postgres.js : Unknown Message:", x[0]);
  }
  function UnknownAuth(x, type) {
    console.error("Postgres.js : Unknown Auth:", type);
  }
  function Bind(parameters, types5, statement = "", portal = "") {
    let prev, type;
    bytes_default().B().str(portal + bytes_default.N).str(statement + bytes_default.N).i16(0).i16(parameters.length);
    parameters.forEach((x, i) => {
      if (x === null)
        return bytes_default.i32(4294967295);
      type = types5[i];
      parameters[i] = x = type in options.serializers ? options.serializers[type](x) : "" + x;
      prev = bytes_default.i;
      bytes_default.inc(4).str(x).i32(bytes_default.i - prev - 4, prev);
    });
    bytes_default.i16(0);
    return bytes_default.end();
  }
  function Parse(str, parameters, types5, name = "") {
    bytes_default().P().str(name + bytes_default.N).str(str + bytes_default.N).i16(parameters.length);
    parameters.forEach((x, i) => bytes_default.i32(types5[i] || 0));
    return bytes_default.end();
  }
  function Describe(x, name = "") {
    return bytes_default().D().str(x).str(name + bytes_default.N).end();
  }
  function Execute(portal = "", rows2 = 0) {
    return Buffer.concat([
      bytes_default().E().str(portal + bytes_default.N).i32(rows2).end(),
      Flush
    ]);
  }
  function Close(portal = "") {
    return Buffer.concat([
      bytes_default().C().str("P").str(portal + bytes_default.N).end(),
      bytes_default().S().end()
    ]);
  }
  function StartupMessage() {
    return cancelMessage || bytes_default().inc(4).i16(3).z(2).str(Object.entries(Object.assign({
      user,
      database,
      client_encoding: "UTF8"
    }, options.connection)).filter(([, v]) => v).map(([k, v]) => k + bytes_default.N + v).join(bytes_default.N)).z(2).end(0);
  }
};
var parseError = function(x) {
  const error = {};
  let start = 5;
  for (let i = 5;i < x.length - 1; i++) {
    if (x[i] === 0) {
      error[errorFields[x[start]]] = x.toString("utf8", start + 1, i);
      start = i + 1;
    }
  }
  return error;
};
var md5 = function(x) {
  return crypto3.createHash("md5").update(x).digest("hex");
};
var hmac = function(key, x) {
  return crypto3.createHmac("sha256", key).update(x).digest();
};
var sha2562 = function(x) {
  return crypto3.createHash("sha256").update(x).digest();
};
var xor = function(a, b2) {
  const length = Math.max(a.length, b2.length);
  const buffer3 = Buffer.allocUnsafe(length);
  for (let i = 0;i < length; i++)
    buffer3[i] = a[i] ^ b2[i];
  return buffer3;
};
var timer = function(fn, seconds) {
  seconds = typeof seconds === "function" ? seconds() : seconds;
  if (!seconds)
    return { cancel: noop, start: noop };
  let timer2;
  return {
    cancel() {
      timer2 && (clearTimeout(timer2), timer2 = null);
    },
    start() {
      timer2 && clearTimeout(timer2);
      timer2 = setTimeout(done, seconds * 1000, arguments);
    }
  };
  function done(args) {
    fn.apply(null, args);
    timer2 = null;
  }
};
var connection_default = Connection;
var uid = 1;
var Sync = bytes_default().S().end();
var Flush = bytes_default().H().end();
var SSLRequest = bytes_default().i32(8).i32(80877103).end(8);
var ExecuteUnnamed = Buffer.concat([bytes_default().E().str(bytes_default.N).i32(0).end(), Sync]);
var DescribeUnnamed = bytes_default().D().str("S").str(bytes_default.N).end();
var noop = () => {
};
var retryRoutines = new Set([
  "FetchPreparedStatement",
  "RevalidateCachedQuery",
  "transformAssignedExpr"
]);
var errorFields = {
  83: "severity_local",
  86: "severity",
  67: "code",
  77: "message",
  68: "detail",
  72: "hint",
  80: "position",
  112: "internal_position",
  113: "internal_query",
  87: "where",
  115: "schema_name",
  116: "table_name",
  99: "column_name",
  100: "data type_name",
  110: "constraint_name",
  70: "file",
  76: "line",
  82: "routine"
};

// node_modules/postgres/src/subscribe.js
var Time = function(x) {
  return new Date(Date.UTC(2000, 0, 1) + Number(x / BigInt(1000)));
};
var parse2 = function(x, state, parsers2, handle, transform) {
  const char = (acc, [k, v]) => (acc[k.charCodeAt(0)] = v, acc);
  Object.entries({
    R: (x2) => {
      let i = 1;
      const r = state[x2.readUInt32BE(i)] = {
        schema: x2.toString("utf8", i += 4, i = x2.indexOf(0, i)) || "pg_catalog",
        table: x2.toString("utf8", i + 1, i = x2.indexOf(0, i + 1)),
        columns: Array(x2.readUInt16BE(i += 2)),
        keys: []
      };
      i += 2;
      let columnIndex = 0, column;
      while (i < x2.length) {
        column = r.columns[columnIndex++] = {
          key: x2[i++],
          name: transform.column.from ? transform.column.from(x2.toString("utf8", i, i = x2.indexOf(0, i))) : x2.toString("utf8", i, i = x2.indexOf(0, i)),
          type: x2.readUInt32BE(i += 1),
          parser: parsers2[x2.readUInt32BE(i)],
          atttypmod: x2.readUInt32BE(i += 4)
        };
        column.key && r.keys.push(column);
        i += 4;
      }
    },
    Y: () => {
    },
    O: () => {
    },
    B: (x2) => {
      state.date = Time(x2.readBigInt64BE(9));
      state.lsn = x2.subarray(1, 9);
    },
    I: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      const { row } = tuples(x2, relation.columns, i += 7, transform);
      handle(row, {
        command: "insert",
        relation
      });
    },
    D: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      handle(key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform).row : null, {
        command: "delete",
        relation,
        key
      });
    },
    U: (x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      const xs = key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform) : null;
      xs && (i = xs.i);
      const { row } = tuples(x2, relation.columns, i + 3, transform);
      handle(row, {
        command: "update",
        relation,
        key,
        old: xs && xs.row
      });
    },
    T: () => {
    },
    C: () => {
    }
  }).reduce(char, {})[x[0]](x);
};
var tuples = function(x, columns, xi, transform) {
  let type, column, value;
  const row = transform.raw ? new Array(columns.length) : {};
  for (let i = 0;i < columns.length; i++) {
    type = x[xi++];
    column = columns[i];
    value = type === 110 ? null : type === 117 ? undefined : column.parser === undefined ? x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)) : column.parser.array === true ? column.parser(x.toString("utf8", xi + 5, xi += 4 + x.readUInt32BE(xi))) : column.parser(x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)));
    transform.raw ? row[i] = transform.raw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
  }
  return { i: xi, row: transform.row.from ? transform.row.from(row) : row };
};
var parseEvent = function(x) {
  const xs = x.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || [];
  if (!xs)
    throw new Error("Malformed subscribe pattern: " + x);
  const [, command, path, key] = xs;
  return (command || "*") + (path ? ":" + (path.indexOf(".") === -1 ? "public." + path : path) : "") + (key ? "=" + key : "");
};
var noop2 = () => {
};
function Subscribe(postgres2, options) {
  const subscribers = new Map, slot = "postgresjs_" + Math.random().toString(36).slice(2), state = {};
  let connection2, stream5, ended = false;
  const sql = subscribe.sql = postgres2({
    ...options,
    transform: { column: {}, value: {}, row: {} },
    max: 1,
    fetch_types: false,
    idle_timeout: null,
    max_lifetime: null,
    connection: {
      ...options.connection,
      replication: "database"
    },
    onclose: async function() {
      if (ended)
        return;
      stream5 = null;
      state.pid = state.secret = undefined;
      connected(await init(sql, slot, options.publications));
      subscribers.forEach((event) => event.forEach(({ onsubscribe }) => onsubscribe()));
    },
    no_subscribe: true
  });
  const { end, close } = sql;
  sql.end = async () => {
    ended = true;
    stream5 && await new Promise((r) => (stream5.once("close", r), stream5.end()));
    return end();
  };
  sql.close = async () => {
    stream5 && await new Promise((r) => (stream5.once("close", r), stream5.end()));
    return close();
  };
  return subscribe;
  async function subscribe(event, fn, onsubscribe = noop2) {
    event = parseEvent(event);
    if (!connection2)
      connection2 = init(sql, slot, options.publications);
    const subscriber = { fn, onsubscribe };
    const fns = subscribers.has(event) ? subscribers.get(event).add(subscriber) : subscribers.set(event, new Set([subscriber])).get(event);
    const unsubscribe = () => {
      fns.delete(subscriber);
      fns.size === 0 && subscribers.delete(event);
    };
    return connection2.then((x) => {
      connected(x);
      onsubscribe();
      return { unsubscribe, state, sql };
    });
  }
  function connected(x) {
    stream5 = x.stream;
    state.pid = x.state.pid;
    state.secret = x.state.secret;
  }
  async function init(sql2, slot2, publications) {
    if (!publications)
      throw new Error("Missing publication names");
    const xs = await sql2.unsafe(`CREATE_REPLICATION_SLOT ${slot2} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`);
    const [x] = xs;
    const stream6 = await sql2.unsafe(`START_REPLICATION SLOT ${slot2} LOGICAL ${x.consistent_point} (proto_version '1', publication_names '${publications}')`).writable();
    const state2 = {
      lsn: Buffer.concat(x.consistent_point.split("/").map((x2) => Buffer.from(("00000000" + x2).slice(-8), "hex")))
    };
    stream6.on("data", data);
    stream6.on("error", error);
    stream6.on("close", sql2.close);
    return { stream: stream6, state: xs.state };
    function error(e) {
      console.error("Unexpected error during logical streaming - reconnecting", e);
    }
    function data(x2) {
      if (x2[0] === 119)
        parse2(x2.subarray(25), state2, sql2.options.parsers, handle, options.transform);
      else if (x2[0] === 107 && x2[17])
        pong();
    }
    function handle(a, b2) {
      const path = b2.relation.schema + "." + b2.relation.table;
      call("*", a, b2);
      call("*:" + path, a, b2);
      b2.relation.keys.length && call("*:" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
      call(b2.command, a, b2);
      call(b2.command + ":" + path, a, b2);
      b2.relation.keys.length && call(b2.command + ":" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
    }
    function pong() {
      const x2 = Buffer.alloc(34);
      x2[0] = "r".charCodeAt(0);
      x2.fill(state2.lsn, 1);
      x2.writeBigInt64BE(BigInt(Date.now() - Date.UTC(2000, 0, 1)) * BigInt(1000), 25);
      stream6.write(x2);
    }
  }
  function call(x, a, b2) {
    subscribers.has(x) && subscribers.get(x).forEach(({ fn }) => fn(a, b2, x));
  }
}

// node_modules/postgres/src/large.js
import Stream2 from "stream";
function largeObject(sql, oid, mode = 131072 | 262144) {
  return new Promise(async (resolve, reject) => {
    await sql.begin(async (sql2) => {
      let finish;
      !oid && ([{ oid }] = await sql2`select lo_creat(-1) as oid`);
      const [{ fd }] = await sql2`select lo_open(${oid}, ${mode}) as fd`;
      const lo = {
        writable,
        readable,
        close: () => sql2`select lo_close(${fd})`.then(finish),
        tell: () => sql2`select lo_tell64(${fd})`,
        read: (x) => sql2`select loread(${fd}, ${x}) as data`,
        write: (x) => sql2`select lowrite(${fd}, ${x})`,
        truncate: (x) => sql2`select lo_truncate64(${fd}, ${x})`,
        seek: (x, whence = 0) => sql2`select lo_lseek64(${fd}, ${x}, ${whence})`,
        size: () => sql2`
          select
            lo_lseek64(${fd}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `
      };
      resolve(lo);
      return new Promise(async (r) => finish = r);
      async function readable({
        highWaterMark = 2048 * 8,
        start = 0,
        end = Infinity
      } = {}) {
        let max = end - start;
        start && await lo.seek(start);
        return new Stream2.Readable({
          highWaterMark,
          async read(size2) {
            const l = size2 > max ? size2 - max : size2;
            max -= size2;
            const [{ data }] = await lo.read(l);
            this.push(data);
            if (data.length < size2)
              this.push(null);
          }
        });
      }
      async function writable({
        highWaterMark = 2048 * 8,
        start = 0
      } = {}) {
        start && await lo.seek(start);
        return new Stream2.Writable({
          highWaterMark,
          write(chunk, encoding, callback) {
            lo.write(chunk).then(() => callback(), callback);
          }
        });
      }
    }).catch(reject);
  });
}

// node_modules/postgres/src/index.js
var Postgres = function(a, b2) {
  const options = parseOptions(a, b2), subscribe2 = options.no_subscribe || Subscribe(Postgres, { ...options });
  let ending = false;
  const queries = queue_default(), connecting = queue_default(), reserved = queue_default(), closed = queue_default(), ended = queue_default(), open = queue_default(), busy = queue_default(), full = queue_default(), queues = { connecting, reserved, closed, ended, open, busy, full };
  const connections = [...Array(options.max)].map(() => connection_default(options, queues, { onopen, onend, onclose }));
  const sql = Sql2(handler);
  Object.assign(sql, {
    get parameters() {
      return options.parameters;
    },
    largeObject: largeObject.bind(null, sql),
    subscribe: subscribe2,
    CLOSE,
    END: CLOSE,
    PostgresError,
    options,
    reserve,
    listen,
    begin,
    close,
    end
  });
  return sql;
  function Sql2(handler2) {
    handler2.debug = options.debug;
    Object.entries(options.types).reduce((acc, [name, type]) => {
      acc[name] = (x) => new Parameter(x, type.to);
      return acc;
    }, typed);
    Object.assign(sql2, {
      types: typed,
      typed,
      unsafe,
      notify,
      array,
      json,
      file
    });
    return sql2;
    function typed(value, type) {
      return new Parameter(value, type);
    }
    function sql2(strings, ...args) {
      const query4 = strings && Array.isArray(strings.raw) ? new Query(strings, args, handler2, cancel) : typeof strings === "string" && !args.length ? new Identifier(options.transform.column.to ? options.transform.column.to(strings) : strings) : new Builder(strings, args);
      return query4;
    }
    function unsafe(string, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query4 = new Query([string], args, handler2, cancel, {
        prepare: false,
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query4;
    }
    function file(path, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query4 = new Query([], args, (query5) => {
        fs.readFile(path, "utf8", (err, string) => {
          if (err)
            return query5.reject(err);
          query5.strings = [string];
          handler2(query5);
        });
      }, cancel, {
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query4;
    }
  }
  async function listen(name, fn, onlisten) {
    const listener = { fn, onlisten };
    const sql2 = listen.sql || (listen.sql = Postgres({
      ...options,
      max: 1,
      idle_timeout: null,
      max_lifetime: null,
      fetch_types: false,
      onclose() {
        Object.entries(listen.channels).forEach(([name2, { listeners }]) => {
          delete listen.channels[name2];
          Promise.all(listeners.map((l) => listen(name2, l.fn, l.onlisten).catch(() => {
          })));
        });
      },
      onnotify(c, x) {
        c in listen.channels && listen.channels[c].listeners.forEach((l) => l.fn(x));
      }
    }));
    const channels = listen.channels || (listen.channels = {}), exists = name in channels;
    if (exists) {
      channels[name].listeners.push(listener);
      const result3 = await channels[name].result;
      listener.onlisten && listener.onlisten();
      return { state: result3.state, unlisten };
    }
    channels[name] = { result: sql2`listen ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`, listeners: [listener] };
    const result2 = await channels[name].result;
    listener.onlisten && listener.onlisten();
    return { state: result2.state, unlisten };
    async function unlisten() {
      if (name in channels === false)
        return;
      channels[name].listeners = channels[name].listeners.filter((x) => x !== listener);
      if (channels[name].listeners.length)
        return;
      delete channels[name];
      return sql2`unlisten ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`;
    }
  }
  async function notify(channel, payload) {
    return await sql`select pg_notify(${channel}, ${"" + payload})`;
  }
  async function reserve() {
    const queue3 = queue_default();
    const c = open.length ? open.shift() : await new Promise((r) => {
      queries.push({ reserve: r });
      closed.length && connect(closed.shift());
    });
    move(c, reserved);
    c.reserved = () => queue3.length ? c.execute(queue3.shift()) : move(c, reserved);
    c.reserved.release = true;
    const sql2 = Sql2(handler2);
    sql2.release = () => {
      c.reserved = null;
      onopen(c);
    };
    return sql2;
    function handler2(q) {
      c.queue === full ? queue3.push(q) : c.execute(q) || move(c, full);
    }
  }
  async function begin(options2, fn) {
    !fn && (fn = options2, options2 = "");
    const queries2 = queue_default();
    let savepoints = 0, connection3, prepare = null;
    try {
      await sql.unsafe("begin " + options2.replace(/[^a-z ]/ig, ""), [], { onexecute }).execute();
      return await Promise.race([
        scope(connection3, fn),
        new Promise((_, reject) => connection3.onclose = reject)
      ]);
    } catch (error) {
      throw error;
    }
    async function scope(c, fn2, name) {
      const sql2 = Sql2(handler2);
      sql2.savepoint = savepoint;
      sql2.prepare = (x) => prepare = x.replace(/[^a-z0-9$-_. ]/gi);
      let uncaughtError, result2;
      name && await sql2`savepoint ${sql2(name)}`;
      try {
        result2 = await new Promise((resolve, reject) => {
          const x = fn2(sql2);
          Promise.resolve(Array.isArray(x) ? Promise.all(x) : x).then(resolve, reject);
        });
        if (uncaughtError)
          throw uncaughtError;
      } catch (e) {
        await (name ? sql2`rollback to ${sql2(name)}` : sql2`rollback`);
        throw e instanceof PostgresError && e.code === "25P02" && uncaughtError || e;
      }
      if (!name) {
        prepare ? await sql2`prepare transaction '${sql2.unsafe(prepare)}'` : await sql2`commit`;
      }
      return result2;
      function savepoint(name2, fn3) {
        if (name2 && Array.isArray(name2.raw))
          return savepoint((sql3) => sql3.apply(sql3, arguments));
        arguments.length === 1 && (fn3 = name2, name2 = null);
        return scope(c, fn3, "s" + savepoints++ + (name2 ? "_" + name2 : ""));
      }
      function handler2(q) {
        q.catch((e) => uncaughtError || (uncaughtError = e));
        c.queue === full ? queries2.push(q) : c.execute(q) || move(c, full);
      }
    }
    function onexecute(c) {
      connection3 = c;
      move(c, reserved);
      c.reserved = () => queries2.length ? c.execute(queries2.shift()) : move(c, reserved);
    }
  }
  function move(c, queue3) {
    c.queue.remove(c);
    queue3.push(c);
    c.queue = queue3;
    queue3 === open ? c.idleTimer.start() : c.idleTimer.cancel();
    return c;
  }
  function json(x) {
    return new Parameter(x, 3802);
  }
  function array(x, type) {
    if (!Array.isArray(x))
      return array(Array.from(arguments));
    return new Parameter(x, type || (x.length ? inferType(x) || 25 : 0), options.shared.typeArrayMap);
  }
  function handler(query4) {
    if (ending)
      return query4.reject(Errors.connection("CONNECTION_ENDED", options, options));
    if (open.length)
      return go(open.shift(), query4);
    if (closed.length)
      return connect(closed.shift(), query4);
    busy.length ? go(busy.shift(), query4) : queries.push(query4);
  }
  function go(c, query4) {
    return c.execute(query4) ? move(c, busy) : move(c, full);
  }
  function cancel(query4) {
    return new Promise((resolve, reject) => {
      query4.state ? query4.active ? connection_default(options).cancel(query4.state, resolve, reject) : query4.cancelled = { resolve, reject } : (queries.remove(query4), query4.cancelled = true, query4.reject(Errors.generic("57014", "canceling statement due to user request")), resolve());
    });
  }
  async function end({ timeout = null } = {}) {
    if (ending)
      return ending;
    await 1;
    let timer2;
    return ending = Promise.race([
      new Promise((r) => timeout !== null && (timer2 = setTimeout(destroy, timeout * 1000, r))),
      Promise.all(connections.map((c) => c.end()).concat(listen.sql ? listen.sql.end({ timeout: 0 }) : [], subscribe2.sql ? subscribe2.sql.end({ timeout: 0 }) : []))
    ]).then(() => clearTimeout(timer2));
  }
  async function close() {
    await Promise.all(connections.map((c) => c.end()));
  }
  async function destroy(resolve) {
    await Promise.all(connections.map((c) => c.terminate()));
    while (queries.length)
      queries.shift().reject(Errors.connection("CONNECTION_DESTROYED", options));
    resolve();
  }
  function connect(c, query4) {
    move(c, connecting);
    c.connect(query4);
    return c;
  }
  function onend(c) {
    move(c, ended);
  }
  function onopen(c) {
    if (queries.length === 0)
      return move(c, open);
    let max = Math.ceil(queries.length / (connecting.length + 1)), ready = true;
    while (ready && queries.length && max-- > 0) {
      const query4 = queries.shift();
      if (query4.reserve)
        return query4.reserve(c);
      ready = c.execute(query4);
    }
    ready ? move(c, busy) : move(c, full);
  }
  function onclose(c, e) {
    move(c, closed);
    c.reserved = null;
    c.onclose && (c.onclose(e), c.onclose = null);
    options.onclose && options.onclose(c.id);
    queries.length && connect(c, queries.shift());
  }
};
var parseOptions = function(a, b2) {
  if (a && a.shared)
    return a;
  const env = process.env, o = (!a || typeof a === "string" ? b2 : a) || {}, { url: url7, multihost } = parseUrl(a), query4 = [...url7.searchParams].reduce((a2, [b3, c]) => (a2[b3] = c, a2), {}), host = o.hostname || o.host || multihost || url7.hostname || env.PGHOST || "localhost", port = o.port || url7.port || env.PGPORT || 5432, user = o.user || o.username || url7.username || env.PGUSERNAME || env.PGUSER || osUsername();
  o.no_prepare && (o.prepare = false);
  query4.sslmode && (query4.ssl = query4.sslmode, delete query4.sslmode);
  "timeout" in o && (console.log("The timeout option is deprecated, use idle_timeout instead"), o.idle_timeout = o.timeout);
  query4.sslrootcert === "system" && (query4.ssl = "verify-full");
  const ints = ["idle_timeout", "connect_timeout", "max_lifetime", "max_pipeline", "backoff", "keep_alive"];
  const defaults = {
    max: 10,
    ssl: false,
    idle_timeout: null,
    connect_timeout: 30,
    max_lifetime,
    max_pipeline: 100,
    backoff,
    keep_alive: 60,
    prepare: true,
    debug: false,
    fetch_types: true,
    publications: "alltables",
    target_session_attrs: null
  };
  return {
    host: Array.isArray(host) ? host : host.split(",").map((x) => x.split(":")[0]),
    port: Array.isArray(port) ? port : host.split(",").map((x) => parseInt(x.split(":")[1] || port)),
    path: o.path || host.indexOf("/") > -1 && host + "/.s.PGSQL." + port,
    database: o.database || o.db || (url7.pathname || "").slice(1) || env.PGDATABASE || user,
    user,
    pass: o.pass || o.password || url7.password || env.PGPASSWORD || "",
    ...Object.entries(defaults).reduce((acc, [k, d]) => {
      const value = k in o ? o[k] : (k in query4) ? query4[k] === "disable" || query4[k] === "false" ? false : query4[k] : env["PG" + k.toUpperCase()] || d;
      acc[k] = typeof value === "string" && ints.includes(k) ? +value : value;
      return acc;
    }, {}),
    connection: {
      application_name: "postgres.js",
      ...o.connection,
      ...Object.entries(query4).reduce((acc, [k, v]) => ((k in defaults) || (acc[k] = v), acc), {})
    },
    types: o.types || {},
    target_session_attrs: tsa(o, url7, env),
    onnotice: o.onnotice,
    onnotify: o.onnotify,
    onclose: o.onclose,
    onparameter: o.onparameter,
    socket: o.socket,
    transform: parseTransform(o.transform || { undefined: undefined }),
    parameters: {},
    shared: { retries: 0, typeArrayMap: {} },
    ...mergeUserTypes(o.types)
  };
};
var tsa = function(o, url7, env) {
  const x = o.target_session_attrs || url7.searchParams.get("target_session_attrs") || env.PGTARGETSESSIONATTRS;
  if (!x || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(x))
    return x;
  throw new Error("target_session_attrs " + x + " is not supported");
};
var backoff = function(retries) {
  return (0.5 + Math.random() / 2) * Math.min(3 ** retries / 100, 20);
};
var max_lifetime = function() {
  return 60 * (30 + Math.random() * 30);
};
var parseTransform = function(x) {
  return {
    undefined: x.undefined,
    column: {
      from: typeof x.column === "function" ? x.column : x.column && x.column.from,
      to: x.column && x.column.to
    },
    value: {
      from: typeof x.value === "function" ? x.value : x.value && x.value.from,
      to: x.value && x.value.to
    },
    row: {
      from: typeof x.row === "function" ? x.row : x.row && x.row.from,
      to: x.row && x.row.to
    }
  };
};
var parseUrl = function(url7) {
  if (!url7 || typeof url7 !== "string")
    return { url: { searchParams: new Map } };
  let host = url7;
  host = host.slice(host.indexOf("://") + 3).split(/[?/]/)[0];
  host = decodeURIComponent(host.slice(host.indexOf("@") + 1));
  const urlObj = new URL(url7.replace(host, host.split(",")[0]));
  return {
    url: {
      username: decodeURIComponent(urlObj.username),
      password: decodeURIComponent(urlObj.password),
      host: urlObj.host,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      searchParams: urlObj.searchParams
    },
    multihost: host.indexOf(",") > -1 && host
  };
};
var osUsername = function() {
  try {
    return os.userInfo().username;
  } catch (_) {
    return "pitpy";
  }
};
Object.assign(Postgres, {
  PostgresError,
  toPascal,
  pascal,
  toCamel,
  camel,
  toKebab,
  kebab,
  fromPascal,
  fromCamel,
  fromKebab,
  BigInt: {
    to: 20,
    from: [20],
    parse: (x) => BigInt(x),
    serialize: (x) => x.toString()
  }
});
var src_default = Postgres;

// src/configs/db.config.ts
var sql = src_default(Bun.env.DATABASE_URL ?? "", {
  transform: src_default.toCamel
});

// src/configs/prisma.config.ts
var client3 = __toESM(require_default2(), 1);
var prisma = new client3.PrismaClient;

// src/routes/user.ts
var user = new Hono2;
user.get("/token", async (c) => {
  const cookieExpiration = 31536000000;
  const token = await generateJwt({
    id: "11",
    name: "John"
  });
  setCookie(c, "token", token, {
    httpOnly: true,
    sameSite: "Strict",
    maxAge: cookieExpiration
  });
  return c.json({ message: "Token generated successfully" });
});
user.get("/name/:name", verifyToken, (c) => {
  return c.json({ message: `Hello ${c.req.param("name")}` });
});
user.get("/", async (c) => {
  const result2 = await sql`
        select u.*, count(*) as cnt 
        from users u
        group by u.id
        order by u.id asc
    `;
  return c.json({
    code: 10,
    data: result2
  });
});
user.get("/:id", async (c) => {
  const result2 = await sql`
        select * from users where id = ${c.req.param("id")} 
    `;
  return c.json({
    code: 10,
    data: result2
  });
});
user.post("/", async (c) => {
  const form = await c.req.json();
  await sql`insert into users ${sql(form)}`;
  return c.json({
    code: 10,
    message: "success"
  });
});
user.get("/prisma", async (c) => {
  const allUsers = await prisma.v_users.findMany({
    where: {
      arr: {
        hasEvery: ["1"]
      }
    }
  });
  return c.json({ code: 10, data: allUsers });
});
export {
  user
};
