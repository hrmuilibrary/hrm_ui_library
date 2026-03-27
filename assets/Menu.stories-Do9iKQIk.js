import{j as e}from"./jsx-runtime-Cc-SByNV.js";import{r as i}from"./iframe-BESH0ZRu.js";import{M as C,N as I}from"./NestedMenu-CCoXLOvc.js";import{B as b}from"./Button-CjUDU1V6.js";import{I as y}from"./IconArrowDownloadFilled-BnpE8hPk.js";import{I as g,a as h,b as x}from"./IconBeach-BGmQZdgU.js";import{I as M}from"./IconMore-DBOiF1bM.js";import{I as O}from"./IconCheckmark-Yh-cU_ll.js";import{I as n}from"./IconSettings-D-yzGdWi.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BFQEBq7q.js";import"./index-fQ655Ppb.js";import"./Text-BBgmrqP6.js";import"./helpers-DC_cADke.js";import"./index-AboGxAif.js";import"./types-BTLoEQt4.js";import"./Popover-qH9fHl6q.js";import"./IconDismiss-BmBRX3xW.js";import"./Link-CJzB9Aib.js";import"./index-BlY6LbMN.js";import"./CollapseGroup-DnehcNGZ.js";import"./Divider-BYoYp-I7.js";import"./AnimatePresenceWrapper-BZsOTDwD.js";import"./IconChevronDown-C4mdT55Q.js";import"./IconChevronUp-Cw-y5TZv.js";import"./IconChevronRight-DBv4miBS.js";import"./AvatarGroup-ChfpKUUS.js";import"./DropzoneFileUpload-uOV37kdo.js";import"./Label-DnLb2EVO.js";import"./useFormProps-CVPIzEzz.js";import"./ErrorMessage-C2J8w-kW.js";import"./IconDynamicComponent-ESUvog5V.js";import"./Snackbar-DT1uOZ5i.js";import"./Alert-CqAREesz.js";import"./IconDismissFilled-CWKQWUfz.js";import"./Progress-BY5H1DFJ.js";import"./IconAdd-BRjqdcD8.js";import"./Checkbox-Br5Y9_wM.js";import"./IconInfo-CT95hS3o.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
