import{j as e}from"./Text-BCy2auDT.js";import{r as i}from"./iframe-DbuX508q.js";import"./DropzoneFileUpload-CwB8h4Ko.js";import{M as C,N as y}from"./UnderConstruction-yQIFCI6E.js";import{B as b}from"./types-B_RHM9mB.js";import"./ButtonGroup-oSe1aLcB.js";import"./Chips-bt-0p-g_.js";import{a as g}from"./IconInfo-D2MfdYuB.js";import{I as h,a as x,b as I}from"./IconBeach-8i-Vpjsg.js";import{c as M,d as O,e as o}from"./IconChevronDoubleRight-BJ7fJSHq.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDismissCircleFilled-C_WNxUpC.js";import"./index-CaVCUHbj.js";const F={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:g},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:h},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:x,type:"selected"},handler:()=>{}}],S=l=>{const[a,p]=i.useState(null),[t,n]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:p,children:[e.jsx(b,{onClick:()=>n(!t),iconProps:{Component:M}}),e.jsx(C,{...l,onClose:()=>n(!1),parentRef:a,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:o,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:I},subItems:[{label:"Libraries",value:1,iconProps:{Component:o,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=l=>{const[a,p]=i.useState(null),[t,n]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:p,children:[e.jsx(b,{onClick:()=>n(!t),iconProps:{Component:o},type:"tertiary"}),e.jsx(y,{...l,onClose:()=>n(!1),parentRef:a,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const U=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,U as __namedExportsOrder,F as default};
