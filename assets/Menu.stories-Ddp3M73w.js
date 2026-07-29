import{j as e}from"./jsx-runtime-BtgfURVQ.js";import{r as i}from"./iframe-Dzwn7jFr.js";import{M as C,N as I}from"./NestedMenu-CHibRbIn.js";import{B as b}from"./Button-DwuE8RYj.js";import{I as y}from"./IconArrowDownloadFilled-Bu0vDxHq.js";import{I as g,a as h,b as x}from"./IconBeach-ByAI-QM9.js";import{I as M}from"./IconMore-ZDDx14vw.js";import{I as O}from"./IconCheckmark-DdECC85B.js";import{I as n}from"./IconSettings-BrlVvMeq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BHdDeY2S.js";import"./index-BSkP1pyL.js";import"./Text-DlqznRJU.js";import"./helpers-Jrcu8OdA.js";import"./index-AboGxAif.js";import"./types-XEo9Gk2s.js";import"./index-BI6OO8u8.js";import"./useOnOutsideClick-B1t7TlwA.js";import"./CollapseGroup-Dma2IsWa.js";import"./Divider-WOjhnO5d.js";import"./AnimatePresenceWrapper-DWppCfjr.js";import"./IconChevronDown-BXC1Om_h.js";import"./IconChevronUp-DeMTU6ca.js";import"./IconChevronRight-CBf1A1-m.js";import"./AvatarGroup-Cl5ij7KB.js";import"./DropzoneFileUpload-Bzo4Oprx.js";import"./Label-Do6HhDve.js";import"./useFormProps-Uo0oAIx2.js";import"./ErrorMessage-Cv4wEjz1.js";import"./IconDynamicComponent-CIdkvJV_.js";import"./Snackbar-DclGCo1k.js";import"./Alert-yYDVsGOU.js";import"./IconDismissFilled-qMhWnjFZ.js";import"./Progress-CM9FQtsu.js";import"./IconAdd-Jr8g5K7P.js";import"./Checkbox-DAdIYCDX.js";import"./Popover-pZ77Y-ar.js";import"./IconDismiss-ByHcyab1.js";import"./Link-5B3blEnc.js";import"./IconInfo-BkG6q60h.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
