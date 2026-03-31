import{j as e}from"./jsx-runtime-DQlmkMdY.js";import{r as i}from"./iframe-CmDa5GZP.js";import{M as C,N as I}from"./NestedMenu-CPeb4Fkg.js";import{B as b}from"./Button-CK3wGp9n.js";import{I as y}from"./IconArrowDownloadFilled-C92B9O-R.js";import{I as g,a as h,b as x}from"./IconBeach-BDepdxEE.js";import{I as M}from"./IconMore-Dc_WrV2A.js";import{I as O}from"./IconCheckmark-BlR6bumK.js";import{I as n}from"./IconSettings-CPQbENm7.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BtYOQ9vv.js";import"./index-D0HdYkOZ.js";import"./Text-zjhjLRes.js";import"./helpers-DSCHDZV3.js";import"./index-AboGxAif.js";import"./types-BP9r0hDn.js";import"./Popover-CuckBw2H.js";import"./IconDismiss-DMw4S2bm.js";import"./Link-CS0TNdkZ.js";import"./index-Bt98_JU4.js";import"./CollapseGroup-B5ALAsFp.js";import"./Divider-D9mop1G_.js";import"./AnimatePresenceWrapper-NGN9_L93.js";import"./IconChevronDown-B8ksVx3J.js";import"./IconChevronUp-Cf1rS0kG.js";import"./IconChevronRight-CrRiJEm3.js";import"./AvatarGroup-DixyKW5V.js";import"./DropzoneFileUpload-BVnk-D5n.js";import"./Label-2DKiy3Dq.js";import"./useFormProps-Bvb1DugD.js";import"./ErrorMessage-BbD_a1-B.js";import"./IconDynamicComponent-BjJ3mRJP.js";import"./Snackbar-djLHe3oD.js";import"./Alert-Js6i0Y5o.js";import"./IconDismissFilled-ClG4b6KL.js";import"./Progress-D-MJIzzt.js";import"./IconAdd-CkDjvSh9.js";import"./Checkbox-DYWFks94.js";import"./IconInfo-2jJEvtoo.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
