import{j as e}from"./jsx-runtime-YTRMAMC9.js";import{r as i}from"./iframe-Bz8v1jG0.js";import{M as C,N as I}from"./NestedMenu-CUhjTHG6.js";import{B as b}from"./Button-Cr1XXYeU.js";import{I as y}from"./IconArrowDownloadFilled-B3C5tfmB.js";import{I as g,a as h,b as x}from"./IconBeach-4r0ZcrV6.js";import{I as M}from"./IconMore-CYUPhdM7.js";import{I as O}from"./IconCheckmark-Dyq9mST-.js";import{I as n}from"./IconSettings-D8osY_yf.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-CRvt-Zqu.js";import"./index-CCV_6fZJ.js";import"./Text-CDgaskpx.js";import"./helpers-DdlCvY-8.js";import"./index-AboGxAif.js";import"./types-DTKsVdmf.js";import"./index-KGRCjFB6.js";import"./Popover-CrUvi3q6.js";import"./IconDismiss-BIe7PhEs.js";import"./Link-CWFVNOtL.js";import"./CollapseGroup-Yk5FX1S_.js";import"./Divider-Do11Yhn9.js";import"./AnimatePresenceWrapper-BTgnW93m.js";import"./IconChevronDown-C5Posxhz.js";import"./IconChevronUp-JKt2DZGc.js";import"./IconChevronRight-CvQ_MXd8.js";import"./AvatarGroup-BClAzU_6.js";import"./DropzoneFileUpload-Dbu0cgAE.js";import"./Label-CDP5XRmq.js";import"./useFormProps-Dq12Q9qE.js";import"./ErrorMessage-BX0YjoTx.js";import"./IconDynamicComponent--deHnbu1.js";import"./Snackbar-DCMce0qW.js";import"./Alert-DKoRs18J.js";import"./IconDismissFilled-DIchfWA5.js";import"./Progress-qpkB18Bi.js";import"./IconAdd-BzTejTfW.js";import"./Checkbox-aplq3Nim.js";import"./IconInfo-CJH8RzHU.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
