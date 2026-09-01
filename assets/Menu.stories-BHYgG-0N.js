import{j as e}from"./jsx-runtime-4NWiPWPm.js";import{r as i}from"./iframe-BG6WM3e7.js";import{M as C,N as I}from"./NestedMenu-lNX23_3M.js";import{B as b}from"./Button-DQ1mKJOG.js";import{I as y}from"./IconArrowDownloadFilled-5oVrIbWk.js";import{I as g,a as h,b as x}from"./IconBeach-BzJKHEBG.js";import{I as M}from"./IconMore-BvyES18e.js";import{I as O}from"./IconCheckmark-C4Y-jC1I.js";import{I as n}from"./IconSettings-D1LOBXzq.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-jcR62bqi.js";import"./index-BKlDniVL.js";import"./Text-CM9T0sJi.js";import"./helpers-no7yRckL.js";import"./index-AboGxAif.js";import"./types-DmrQQh7l.js";import"./index-X9kxBWE2.js";import"./useOnOutsideClick-Bfn95q0E.js";import"./CollapseGroup-rPRi14wf.js";import"./Divider-BGwfJTwU.js";import"./AnimatePresenceWrapper-PqtIVJNl.js";import"./IconChevronDown-Fn-tYr4A.js";import"./IconChevronUp--qucuA-M.js";import"./IconChevronRight-DYazX7ce.js";import"./AvatarGroup-CzuQxNhz.js";import"./DropzoneFileUpload-XJ1Ljc6r.js";import"./Label-CrVXFlsx.js";import"./useFormProps-BF5m7plc.js";import"./ErrorMessage-BGQl9l1U.js";import"./IconDynamicComponent-VEflY6BO.js";import"./Snackbar-D9GeNfa-.js";import"./Alert-QHkjFDnv.js";import"./IconDismissFilled-DE9glwdO.js";import"./Progress-xBNljjus.js";import"./IconAdd-BYnpRF1a.js";import"./Checkbox-B25pHGU-.js";import"./Popover-CGGsCyV-.js";import"./IconDismiss-0OykOwFT.js";import"./Link-CAvzy2Au.js";import"./IconInfo-Bb9hx5Qt.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
