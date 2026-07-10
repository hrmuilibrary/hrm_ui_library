import{j as e}from"./jsx-runtime-BarBKLmL.js";import{r as i}from"./iframe-BwLkT-HM.js";import{M as C,N as I}from"./NestedMenu-DInhROTj.js";import{B as b}from"./Button-B1KYsLoT.js";import{I as y}from"./IconArrowDownloadFilled-9whweL6p.js";import{I as g,a as h,b as x}from"./IconBeach-nPPGfVGb.js";import{I as M}from"./IconMore-C_Fj6MxH.js";import{I as O}from"./IconCheckmark-Bu-A4eee.js";import{I as n}from"./IconSettings-CLD8GJ8b.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CIqc5Yzv.js";import"./index-BWpdNhGt.js";import"./Text-y-nRn9Q2.js";import"./helpers-BVTy3eVf.js";import"./index-AboGxAif.js";import"./types-Dfy1ZLP3.js";import"./index-CDBNu5nr.js";import"./Popover-CaVe17ta.js";import"./IconDismiss-BqNIMBoF.js";import"./Link-BRUCOZ7Z.js";import"./CollapseGroup-FRI7LahF.js";import"./Divider-Bmw9MxHR.js";import"./AnimatePresenceWrapper-DBxYXuBO.js";import"./IconChevronDown-CvausEjt.js";import"./IconChevronUp-DleAzzqn.js";import"./IconChevronRight-BFvWeYcm.js";import"./AvatarGroup-DNEna9Je.js";import"./DropzoneFileUpload-4GLdzXhv.js";import"./Label-6xyH2ZSM.js";import"./useFormProps-C9SN7rJ3.js";import"./ErrorMessage-nGEJKivg.js";import"./IconDynamicComponent-C6J9ZmZS.js";import"./Snackbar-ejSYHirg.js";import"./Alert-CEY1p4aO.js";import"./IconDismissFilled-B_NHnzPT.js";import"./Progress-KN4pf4L-.js";import"./IconAdd-CEZYyGG0.js";import"./Checkbox-rdO_J5C6.js";import"./IconInfo-XC7Xv-dl.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
