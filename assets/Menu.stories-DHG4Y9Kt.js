import{j as e}from"./jsx-runtime-BwwPEZn0.js";import{r as i}from"./iframe-BIzGzJ_b.js";import{M as C,N as I}from"./NestedMenu-BOgXwX2u.js";import{B as b}from"./Button-DpqSA8FN.js";import{I as y}from"./IconArrowDownloadFilled-oBanAoOC.js";import{I as g,a as h,b as x}from"./IconBeach-YWW0DrrD.js";import{I as M}from"./IconMore-M58PzPAn.js";import{I as O}from"./IconCheckmark-Cd2IHeIv.js";import{I as n}from"./IconSettings-u78iADCg.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DkluFP_a.js";import"./index-B8yEByCr.js";import"./Text-Crx1xgcX.js";import"./helpers-DUxwTJ7n.js";import"./index-DYDl_GcV.js";import"./types-BttHpRV4.js";import"./ModalConfirmation-BCoRbo2R.js";import"./AnimatePresenceWrapper-C1cuY54J.js";import"./IconDismiss-KT0CHKHG.js";import"./index-GNsvtDYa.js";import"./CollapseGroup-BQxn2-Dy.js";import"./Divider-B9S1-Vs7.js";import"./IconChevronDown-DjDVXRX8.js";import"./IconChevronUp-DoVk5Wxu.js";import"./IconChevronRight-BHMfY2Xa.js";import"./AvatarGroup-B8vSD7HV.js";import"./DropzoneFileUpload-B81st8ov.js";import"./Label-BF8-0rlM.js";import"./useFormProps-D6FUP3RV.js";import"./ErrorMessage-CX0S8djx.js";import"./IconDynamicComponent-BZ7NUcQ7.js";import"./IconDelete-DXejohKL.js";import"./Snackbar-CQoZo-ZH.js";import"./Alert-BgrMEaR8.js";import"./IconDismissFilled-BrOrKzkQ.js";import"./Progress-CdqaO2oM.js";import"./IconAdd-ByBgl20g.js";import"./Checkbox-CLvZcKUu.js";import"./Popover-C4DFxLRs.js";import"./Link-D_tVsXHm.js";import"./IconInfo-BVytbzZv.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
