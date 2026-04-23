import{j as e}from"./jsx-runtime-w4ZoJjJB.js";import{r as i}from"./iframe-Brhiys7H.js";import{M as C,N as I}from"./NestedMenu-DoVh2YUD.js";import{B as b}from"./Button-dH5m6yxL.js";import{I as y}from"./IconArrowDownloadFilled-KCWphuvR.js";import{I as g,a as h,b as x}from"./IconBeach-BnAcvkYu.js";import{I as M}from"./IconMore-XpHBQEpV.js";import{I as O}from"./IconCheckmark-DGr1bTdF.js";import{I as n}from"./IconSettings-cP563Lbs.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-TMM9ywqe.js";import"./index-BHva8P6J.js";import"./Text-BFdjbe0o.js";import"./helpers-6hKBOWAM.js";import"./index-AboGxAif.js";import"./types-C2YxilUn.js";import"./index-MapRQVER.js";import"./Popover-C2VXRQoS.js";import"./IconDismiss-JInBKOeh.js";import"./Link-245uU_Hk.js";import"./CollapseGroup-DA3sBl9L.js";import"./Divider-CmVHKk0i.js";import"./AnimatePresenceWrapper-BiBRlO8m.js";import"./IconChevronDown-CuDsnbJR.js";import"./IconChevronUp-DrgnvcCf.js";import"./IconChevronRight-CaMFMtaD.js";import"./AvatarGroup-Bavm6Rlc.js";import"./DropzoneFileUpload-BB_2xjWc.js";import"./Label-Bt9e2zVt.js";import"./useFormProps-B-Bh-vFc.js";import"./ErrorMessage-RAOXIDcE.js";import"./IconDynamicComponent-CcAERxV8.js";import"./Snackbar-vslCUJBz.js";import"./Alert-D25MO-uR.js";import"./IconDismissFilled-CGP-Dh7o.js";import"./Progress-0depdzsF.js";import"./IconAdd-BrGoR-WU.js";import"./Checkbox-BRtVcbvu.js";import"./IconInfo-BVFj0dFf.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
