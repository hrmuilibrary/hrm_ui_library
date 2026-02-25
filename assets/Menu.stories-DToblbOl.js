import{j as e}from"./jsx-runtime-k_MLO1Wb.js";import{r as i}from"./iframe-sgfNtyBG.js";import{M as C,N as I}from"./NestedMenu-tbTaIPLQ.js";import{B as b}from"./Button-apInVggO.js";import{I as y}from"./IconArrowDownloadFilled-Or44usGD.js";import{I as g,a as h,b as x}from"./IconBeach-D1R4Rf9j.js";import{I as M}from"./IconMore-DdCU4bZV.js";import{I as O}from"./IconCheckmark-BqRZNnOv.js";import{I as n}from"./IconSettings-Pwl_8h2m.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BJJnaT8T.js";import"./index-XhOZWseF.js";import"./Text-D3S4jZTF.js";import"./helpers-hQnIkfdi.js";import"./index-DYDl_GcV.js";import"./types-DtgUqQ59.js";import"./Popover-DfYLZS27.js";import"./IconDismiss-JNGl_Oie.js";import"./Link-DAQjDcBV.js";import"./index-DpRnm5po.js";import"./CollapseGroup-YxBufAcS.js";import"./Divider-3EUK_g-7.js";import"./AnimatePresenceWrapper-DfcX3WMP.js";import"./IconChevronDown-CZRQuyiZ.js";import"./IconChevronUp-BokKfuM4.js";import"./IconChevronRight-CCS6bZAB.js";import"./AvatarGroup-kZwYBRNJ.js";import"./DropzoneFileUpload-CxRiydLZ.js";import"./Label-24isxuk5.js";import"./useFormProps-CnzDY0Jq.js";import"./ErrorMessage-DMJk2C3s.js";import"./IconDynamicComponent-C4baUpSP.js";import"./Snackbar-gZE74k1D.js";import"./Alert-DNDZJPmQ.js";import"./IconDismissFilled-HCXdCHvN.js";import"./Progress-_a62wQ8w.js";import"./IconAdd-ByvsirY7.js";import"./Checkbox-BfCnGSQF.js";import"./IconInfo-CFMYQ6qS.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
