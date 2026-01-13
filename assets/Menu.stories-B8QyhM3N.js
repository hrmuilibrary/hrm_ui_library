import{j as e}from"./jsx-runtime-oQqas1I7.js";import{r as i}from"./iframe-DYBRI1wp.js";import"./DropzoneFileUpload-CKaDWd0o.js";import{M as C,N as g}from"./UnderConstruction-BP18KISM.js";import{B as b}from"./types-DQ6VAzuE.js";import"./ButtonGroup-D-oAr9WM.js";import"./Chips-CBc4N0zw.js";import"./Text-Ervgr_He.js";import{c as h,d as y,e as x,f as I,g as o,h as M}from"./IconYoutube-Ckr_0WrR.js";import{a as O}from"./IconInfo-D81pZUPg.js";import"./IconPerson-BIEUOdwe.js";import"./IconUnitsEmployee-DtJhYD3s.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-BzOHAEqy.js";import"./index-Bw1HxFsN.js";import"./index-DJWDk8xS.js";const G={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:O},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:y},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:x,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:I,type:"selected"},handler:()=>{}}],S=l=>{const[a,p]=i.useState(null),[t,n]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:p,children:[e.jsx(b,{onClick:()=>n(!t),iconProps:{Component:h}}),e.jsx(C,{...l,onClose:()=>n(!1),parentRef:a,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:o,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:M},subItems:[{label:"Libraries",value:1,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=l=>{const[a,p]=i.useState(null),[t,n]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:p,children:[e.jsx(b,{onClick:()=>n(!t),iconProps:{Component:o},type:"tertiary"}),e.jsx(g,{...l,onClose:()=>n(!1),parentRef:a,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const J=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,J as __namedExportsOrder,G as default};
