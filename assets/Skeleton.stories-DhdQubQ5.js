import{j as e}from"./jsx-runtime-DU-5m7M4.js";import{r as b}from"./iframe-DcyHMP67.js";import{c as G}from"./index-CZ0OzgI-.js";import"./preload-helper-Dp1pzeXC.js";const J=["text","circular","rectangular","rounded"],Q=["pulse","wave","none"],X="text",Y="pulse",_=n=>{if(n!=null)return typeof n=="number"?`${n}px`:n},t=n=>{const{variant:u=X,animation:r=Y,width:y,height:g,count:f=1,children:x,style:K,className:M="",dataId:m=""}=n,v=x!=null,j=f>1?f:1,w={...y!==void 0?{width:_(y)}:null,...g!==void 0?{height:_(g)}:null,...K},S=G("skeleton",`skeleton--${u}`,`skeleton--anim-${r}`,{"skeleton--has-children":v,"skeleton--auto-height":v&&g===void 0,"skeleton--auto-width":v&&y===void 0},M);if(v)return e.jsx("span",{className:S,style:w,"data-id":m,children:e.jsx("span",{className:"skeleton__children","aria-hidden":"true",children:x})});if(j===1)return e.jsx("span",{className:S,style:w,"data-id":m,role:"status","aria-label":"Loading"});const k=[];for(let i=0;i<j;i+=1)k.push(e.jsx("span",{className:S,style:w,"data-id":m?`${m}-${i}`:"","aria-hidden":i===0?void 0:!0,role:i===0?"status":void 0,"aria-label":i===0?"Loading":void 0},i));return e.jsx("span",{className:"skeleton-group",children:k})};t.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rectangular' | 'rounded'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rectangular'"},{name:"literal",value:"'rounded'"}]},description:"Visual shape of the placeholder."},animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | 'none'",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"'none'"}]},description:"Animation style. Pass `'none'` to disable."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width as a number (px) or any valid CSS length / percentage."},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height as a number (px) or any valid CSS length / percentage."},count:{required:!1,tsType:{name:"number"},description:"Render N stacked skeletons. Useful for placeholder paragraphs."},children:{required:!1,tsType:{name:"ReactNode"},description:`If provided, the skeleton wraps the children and infers its size from them
while the children remain invisible (used as a layout guide).`},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline style overrides applied to every rendered skeleton element."},className:{required:!1,tsType:{name:"string"},description:""},dataId:{required:!1,tsType:{name:"string"},description:""}}};const se={title:"Skeleton",component:t,argTypes:{variant:{options:J,control:{type:"radio"}},animation:{options:Q,control:{type:"radio"}},width:{control:{type:"text"}},height:{control:{type:"text"}},count:{control:{type:"number",min:1,max:10,step:1}}}},Z=n=>e.jsx("div",{style:{width:320},children:e.jsx(t,{...n})}),l=Z.bind({});l.args={variant:"text",animation:"pulse",width:280,height:void 0,count:1};const H={display:"grid",gridTemplateColumns:"repeat(2, minmax(240px, 320px))",gap:32,padding:16},a={display:"flex",flexDirection:"column",gap:8},s={fontSize:12,textTransform:"uppercase",letterSpacing:.4,color:"#717784"},d=()=>e.jsxs("div",{style:H,children:[e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Text"}),e.jsx(t,{variant:"text",width:280})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Circular"}),e.jsx(t,{variant:"circular",width:56,height:56})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Rectangular"}),e.jsx(t,{variant:"rectangular",width:280,height:120})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Rounded"}),e.jsx(t,{variant:"rounded",width:280,height:120})]})]}),o=()=>e.jsxs("div",{style:H,children:[e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Pulse (default)"}),e.jsx(t,{variant:"rounded",width:280,height:80,animation:"pulse"})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"Wave"}),e.jsx(t,{variant:"rounded",width:280,height:80,animation:"wave"})]}),e.jsxs("div",{style:a,children:[e.jsx("span",{style:s,children:"None"}),e.jsx(t,{variant:"rounded",width:280,height:80,animation:"none"})]})]}),c=()=>e.jsxs("div",{style:{width:360,padding:16},children:[e.jsx(t,{variant:"text",count:4}),e.jsx(t,{variant:"text",width:"60%"})]}),p=()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center",padding:16},children:[e.jsx(t,{variant:"circular",children:e.jsx("div",{style:{width:48,height:48}})}),e.jsx(t,{variant:"text",children:e.jsx("span",{style:{fontSize:24,fontWeight:600},children:"The quick brown fox"})})]}),ee={width:320,border:"1px solid #E1E4EA",borderRadius:12,padding:16,display:"flex",flexDirection:"column",gap:12,background:"#fff"},T={display:"flex",alignItems:"center",gap:12},h=()=>{const[n,u]=b.useState(!0);return b.useEffect(()=>{const r=window.setTimeout(()=>u(!1),2e3);return()=>window.clearTimeout(r)},[]),e.jsxs("div",{style:{display:"flex",gap:24,padding:16,alignItems:"flex-start"},children:[e.jsx("div",{style:ee,children:n?e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:T,children:[e.jsx(t,{variant:"circular",width:40,height:40,animation:"wave"}),e.jsxs("div",{style:{flex:1},children:[e.jsx(t,{variant:"text",width:"60%",animation:"wave"}),e.jsx(t,{variant:"text",width:"40%",animation:"wave"})]})]}),e.jsx(t,{variant:"rounded",width:"100%",height:140,animation:"wave"}),e.jsx(t,{variant:"text",count:3,animation:"wave"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:T,children:[e.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#72BF44"}}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:600},children:"People Space"}),e.jsx("div",{style:{color:"#717784",fontSize:12},children:"Updated just now"})]})]}),e.jsx("div",{style:{width:"100%",height:140,borderRadius:8,background:"linear-gradient(135deg, #72BF44, #1FC16B)"}}),e.jsx("p",{style:{margin:0,color:"#2B303B",lineHeight:1.5},children:"Loaded! The skeleton is replaced once the real content is ready."})]})}),e.jsx("button",{type:"button",onClick:()=>u(r=>!r),style:{padding:"8px 12px",borderRadius:8,border:"1px solid #CACFD8",background:"#fff",cursor:"pointer"},children:"Toggle loading"})]})};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Animations"};c.__docgenInfo={description:"",methods:[],displayName:"TextLines"};p.__docgenInfo={description:"",methods:[],displayName:"InferredFromChildren"};h.__docgenInfo={description:"",methods:[],displayName:"CardLoadingExample"};var N,C,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => <div style={{
  width: 320
}}>
    <_Skeleton {...args} />
  </div>`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var R,L,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => <div style={sectionStyle}>
    <div style={cellStyle}>
      <span style={labelStyle}>Text</span>
      <_Skeleton variant="text" width={280} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Circular</span>
      <_Skeleton variant="circular" width={56} height={56} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Rectangular</span>
      <_Skeleton variant="rectangular" width={280} height={120} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Rounded</span>
      <_Skeleton variant="rounded" width={280} height={120} />
    </div>
  </div>`,...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,F,q;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div style={sectionStyle}>
    <div style={cellStyle}>
      <span style={labelStyle}>Pulse (default)</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="pulse" />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Wave</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="wave" />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>None</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="none" />
    </div>
  </div>`,...(q=(F=o.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var B,P,z;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  width: 360,
  padding: 16
}}>
    <_Skeleton variant="text" count={4} />
    <_Skeleton variant="text" width="60%" />
  </div>`,...(z=(P=c.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var W,D,V;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  gap: 16,
  alignItems: 'center',
  padding: 16
}}>
    <_Skeleton variant="circular">
      <div style={{
      width: 48,
      height: 48
    }} />
    </_Skeleton>
    <_Skeleton variant="text">
      <span style={{
      fontSize: 24,
      fontWeight: 600
    }}>The quick brown fox</span>
    </_Skeleton>
  </div>`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var O,U,$;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handle = window.setTimeout(() => setLoading(false), 2000);
    return () => window.clearTimeout(handle);
  }, []);
  return <div style={{
    display: 'flex',
    gap: 24,
    padding: 16,
    alignItems: 'flex-start'
  }}>
      <div style={cardStyle}>
        {loading ? <>
            <div style={headerRowStyle}>
              <_Skeleton variant="circular" width={40} height={40} animation="wave" />
              <div style={{
            flex: 1
          }}>
                <_Skeleton variant="text" width="60%" animation="wave" />
                <_Skeleton variant="text" width="40%" animation="wave" />
              </div>
            </div>
            <_Skeleton variant="rounded" width="100%" height={140} animation="wave" />
            <_Skeleton variant="text" count={3} animation="wave" />
          </> : <>
            <div style={headerRowStyle}>
              <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#72BF44'
          }} />
              <div>
                <div style={{
              fontWeight: 600
            }}>People Space</div>
                <div style={{
              color: '#717784',
              fontSize: 12
            }}>Updated just now</div>
              </div>
            </div>
            <div style={{
          width: '100%',
          height: 140,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #72BF44, #1FC16B)'
        }} />
            <p style={{
          margin: 0,
          color: '#2B303B',
          lineHeight: 1.5
        }}>
              Loaded! The skeleton is replaced once the real content is ready.
            </p>
          </>}
      </div>
      <button type="button" onClick={() => setLoading(value => !value)} style={{
      padding: '8px 12px',
      borderRadius: 8,
      border: '1px solid #CACFD8',
      background: '#fff',
      cursor: 'pointer'
    }}>
        Toggle loading
      </button>
    </div>;
}`,...($=(U=h.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const re=["Playground","Variants","Animations","TextLines","InferredFromChildren","CardLoadingExample"];export{o as Animations,h as CardLoadingExample,p as InferredFromChildren,l as Playground,c as TextLines,d as Variants,re as __namedExportsOrder,se as default};
