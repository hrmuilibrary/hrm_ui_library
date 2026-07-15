import{j as e}from"./jsx-runtime-BNdl7zfN.js";import{r as i}from"./iframe-DdJqbjP1.js";import{M as C,N as I}from"./NestedMenu-qMGeNpix.js";import{B as b}from"./Button-DliJ8OC0.js";import{I as y}from"./IconArrowDownloadFilled-CxFYskTO.js";import{I as g,a as h,b as x}from"./IconBeach-DS3G5v0x.js";import{I as M}from"./IconMore-CUUWmYkQ.js";import{I as O}from"./IconCheckmark-D1idmFI_.js";import{I as n}from"./IconSettings-BqHHj72T.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B0Q1rQC3.js";import"./index-C2AFq9e_.js";import"./Text-l0k1Tvx0.js";import"./helpers-tWzEQIDg.js";import"./index-AboGxAif.js";import"./types-CkOs2gdt.js";import"./index-BE5nffgT.js";import"./Popover-C12aqYBI.js";import"./IconDismiss-BgUVP6Jy.js";import"./Link-D8SSI2hV.js";import"./CollapseGroup-DwNFbV0s.js";import"./Divider-DGepxJFm.js";import"./AnimatePresenceWrapper-CxjToRxe.js";import"./IconChevronDown-Bfi19NvM.js";import"./IconChevronUp-Qc5EZnnx.js";import"./IconChevronRight-CGCk-H8F.js";import"./AvatarGroup-PGQr7fKO.js";import"./DropzoneFileUpload-DLBio7Dy.js";import"./Label-DIfOdbcI.js";import"./useFormProps-BgdzgCv-.js";import"./ErrorMessage-s6A2AuYI.js";import"./IconDynamicComponent-Bm4JBm7i.js";import"./Snackbar-eqoFlXlB.js";import"./Alert-BAf-gFay.js";import"./IconDismissFilled-BDoyi3mk.js";import"./Progress-zUtMZZN0.js";import"./IconAdd-BQCvNBqL.js";import"./Checkbox-9VOKKy9q.js";import"./IconInfo-DArYuN7y.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
