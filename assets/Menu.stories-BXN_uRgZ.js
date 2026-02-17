import{j as e}from"./jsx-runtime-CxhKFHZr.js";import{r as i}from"./iframe-VzCerQux.js";import{M as C,N as I}from"./NestedMenu-B9yMvDF0.js";import{B as b}from"./Button-CTLExGhq.js";import{I as y}from"./IconArrowDownloadFilled-BxM3W_al.js";import{I as g,a as h,b as x}from"./IconBeach-CF1vAhmQ.js";import{I as M}from"./IconMore-gQKva00A.js";import{I as O}from"./IconCheckmark-BC3yblD7.js";import{I as n}from"./IconSettings-_Un4YzYp.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-FQ2Ypypw.js";import"./index-cSRylV67.js";import"./Text-D7dqKhdH.js";import"./helpers-Boudrv2M.js";import"./index-DYDl_GcV.js";import"./types-C5DXKe7z.js";import"./ModalConfirmation-DppWte2w.js";import"./AnimatePresenceWrapper-C4hZY9Y9.js";import"./IconDismiss-Cmt9EbFe.js";import"./index-DNlpyWB8.js";import"./CollapseGroup-DXBWCNk_.js";import"./Divider-CQ8cOcb0.js";import"./IconChevronDown-MZvoTiOb.js";import"./IconChevronUp-B00eRoOM.js";import"./IconChevronRight-DSVxaHaa.js";import"./AvatarGroup-CIZlY0r_.js";import"./DropzoneFileUpload-CPU0c0B1.js";import"./Label-DvqitQfR.js";import"./useFormProps-Dsfs5g04.js";import"./ErrorMessage-BZZ1OfkZ.js";import"./IconDynamicComponent-DCRsLrVi.js";import"./IconDelete--65dPnu8.js";import"./Snackbar-DCjGci5y.js";import"./Alert-Dmn5e7i9.js";import"./IconDismissFilled-BNbH0Czk.js";import"./Progress-nNnIvxC6.js";import"./IconAdd-BmRQ1_Zc.js";import"./Checkbox-BqVODvtG.js";import"./Popover-DaDvSpDq.js";import"./Link-A-bGjn-u.js";import"./IconInfo-D9ZHhvIW.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
